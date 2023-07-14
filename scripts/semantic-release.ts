#!/usr/bin/env ts-node
import {execSync} from 'child_process';

import yargs from 'yargs';

import packageJson from '../package.json';

import logger from './utils/logger';
import {setPackagesVersion} from './release/setPackageVersion';
import {getPackagesList} from './release/getPackageList';
import {publishPackage} from './release/publishPackage';

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

  logger.info('Releasing all packages');

  const incrementedVersion = packageJson.version;

  if (!argv.skipVersionCheck) {
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

  execSync('npx react-native-version -A -s $CI_PIPELINE_IID');

  logger.info(
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
