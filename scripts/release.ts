#!/usr/bin/env ts-node
import path from 'path';
import {execSync} from 'child_process';

import yargs from 'yargs';
import SimpleGit from 'simple-git';

import packageJson from '../package.json';

import logger from './utils/logger';
import {getIncrementedVersion} from './release/getIncrementedVersion';
import {setPackagesVersion} from './release/setPackageVersion';
import {getPackagesList} from './release/getPackageList';
import {publishPackage} from './release/publishPackage';

const git = SimpleGit();

const parser = yargs(process.argv.slice(2))
  .option('stage', {
    type: 'string',
    choices: ['alpha', 'beta'],
    description: "Prerelease stage: 'alpha', 'beta'",
  })
  .option('tag', {
    type: 'string',
    default: 'latest',
    description: 'Tag',
  })
  .option('skipVersionCheck', {
    type: 'boolean',
    default: false,
    description: 'Skip checking version.',
  })
  .option('skipPublish', {
    type: 'boolean',
    default: false,
    description: 'Skip publishing step.',
  })
  .example([['$0 minor --alpha', 'Prerelease to alpha stage.']])
  .parse();

(async () => {
  const argv = await parser;
  const status = await git.status();

  if (status.files.length !== 0) {
    logger.error('Working tree is not clean');
    process.exit(1);
  }

  logger.info('Releasing all packages');

  let incrementedVersion = packageJson.version;

  if (!argv.skipVersionCheck) {
    incrementedVersion = getIncrementedVersion(incrementedVersion, {
      type: argv._[0] as string,

      stage: argv.stage,
    });
    logger.info(`New version: ${incrementedVersion}`);

    await setPackagesVersion(incrementedVersion);
  }

  const packages = getPackagesList();

  if (!argv.skipPublish) {
    logger.info('Publishing packages to npm');

    if (argv.stage && argv.tag === 'latest') {
      argv.tag = 'next';
    }

    await Promise.all(
      packages.map(p =>
        publishPackage({path: p.path, name: p.packageJson.name, tag: argv.tag}),
      ),
    );

    logger.info('All packages were published successfully');
  }

  execSync('npx react-native-version');

  await git.add([
    path.join(__dirname, '../packages'),
    path.join(__dirname, '../package.json'),
    path.join(__dirname, '../android'),
    path.join(__dirname, '../ios'),
  ]);
  await git.commit(`[release] Version: ${incrementedVersion} [skip ci]`);
  await git.push();
  await git.addTag(`v${incrementedVersion}`);
  await git.pushTags();

  logger.info(
    '                                                                                \n' +
      '                     .                                                          \n' +
      '                     /.,                                                        \n' +
      '                      #@.                                                       \n' +
      '                      .&&                                                       \n' +
      '                        %%                                                      \n' +
      '                        ,*,.                                  *&(/*             \n' +
      '                       ,*#*,/*                           .#/(*    (&(,          \n' +
      '                       /#(*/////                      ,/**//#*       ,          \n' +
      '                      .,.***,,,.**                 ,,. .  .(*/,                 \n' +
      '                       ,(( ,. ..,,,(             .,* . ...#&**                  \n' +
      '                       %..(&&@/*#,*./,(.*,*,***, /*%./. #&/#**                  \n' +
      '                        *(****/(/ ,**../.., .(/.((/**@@&@&, /                   \n' +
      '                       *(&( .,.*(/,. *,,.@/,,**%,,//*.*..(#/,                   \n' +
      '                       */*/.,,,.,&,./. *.&#* ,(,#*.#*.*..(#/,                   \n' +
      '                       *..../*... .%,#%.//*(.,.*.#,,. ,,,*/,                    \n' +
      '                       .**#**, @/(#@ (%*(#*/(*&#/&./@@@(,,*./                   \n' +
      '                       .,%..,..,(/  % ,,.,,..,*/&#@ %*,*.&/,/                   \n' +
      '                       **(.....,..(/%#(***,..*/%(/. *( . *%*.                   \n' +
      '                       #*..(*#/*(* #****.,,,..*#.,, *((,.&/*                    \n' +
      '                      */*/,,,,...*,,#*,, ..,,*//.,,./*,.%%,*                    \n' +
      '                     . */../(#  /@/,.(#&/#%(*(..,(.  ..,,/*.,                   \n' +
      '                      .*#/*#%&, ./,.(% .&@%, ./(/...//*/,*(/.                   \n' +
      '                        ,,(#*/*, /*,&&&%##%&%..    .,/,,*,//                    \n' +
      '                       .,./,.(,.../*** ((%#*#,/,*  .. .//(*,                    \n' +
      '                         ...(. ...**..    .  ...*  . **#/*                      \n' +
      '                        .,,/(**,  . ...    . ..     ,,%(*,..                    \n' +
      '                       ... */&..   . ../*#*... ,   .(%(.   ..                   \n' +
      '                       *.  .,(*   ,*,/#///#*... .. /*/*  ..,.                   \n' +
      '                      ,......*   ,&%//((@**/,*. ...,**(/..,...                  \n' +
      '                     ,., .  .,/,.,,*/(,*%(.,,***//,/*/(/, . ..*                 \n' +
      '                    .*,.    .. .. (*/.,.., .,.,*.../,,,/*, .  ,.                \n' +
      '                  .(**,. ..    ...,.//,,/**(**/..,*.**. .,.  ...                \n' +
      '                 ..*,     . ..,,/*...*(,.,*.*, .#(,//(,//,.,...                 \n' +
      '                 ,,*,,...  .,. ,,(.***,, .. ,,....,..#*#*(,,,,,.                \n' +
      '               .,,*/* ... .,..  . *,(. ..,*  ,.. .*,.(,,,...... .               \n' +
      '               ..,/(....,,.,.(  ,.,,, ....,#,...,,.,///.,,,.,.,.                \n' +
      '              .,**//*.,,,..*.. .,%,*,     .,.. , .,/*,,.,,...,,.,               \n' +
      '             .,..,(,.  ,,*( ,....**, .,. . ... . ,..,//,/.,,,,.,.               \n' +
      '            ..,.,**.  .,&/.,/, ...*.,*.   ..%.  (..,*./*,,**,,*/.               \n' +
      '           ..... .*,..,,* .,..,.,,.*/./*..* /,/,,..*%@##(,,*,,,,,.              \n' +
      '            ...,,,,..,*/.,,,..,(&/ ,(*.*.#/ .,,..,,//#%#,.,......*              \n' +
      '                              Hello from Bibazavr                               \n',
  );
})();
