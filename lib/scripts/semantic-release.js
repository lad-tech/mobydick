#!/usr/bin/env ts-node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const yargs_1 = __importDefault(require("yargs"));
const package_json_1 = __importDefault(require("../package.json"));
const logger_1 = __importDefault(require("./utils/logger"));
const setPackageVersion_1 = require("./release/setPackageVersion");
const getPackageList_1 = require("./release/getPackageList");
const publishPackage_1 = require("./release/publishPackage");
const parser = (0, yargs_1.default)(process.argv.slice(2))
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
    logger_1.default.info('Releasing all packages');
    const incrementedVersion = package_json_1.default.version;
    if (!argv.skipVersionCheck) {
        logger_1.default.info(`New version: ${incrementedVersion}`);
        await (0, setPackageVersion_1.setPackagesVersion)(incrementedVersion);
    }
    const packages = (0, getPackageList_1.getPackagesList)();
    if (!argv.skipPublish) {
        logger_1.default.info('Publishing packages to npm');
        if (argv.stage && argv.tag === 'latest') {
            argv.tag = 'next';
        }
        await Promise.all(packages.map(p => (0, publishPackage_1.publishPackage)({ path: p.path, name: p.packageJson.name, tag: argv.tag })));
        logger_1.default.info('All packages were published successfully');
    }
    (0, child_process_1.execSync)('npx react-native-version -A');
    logger_1.default.info('                     .                                                          \n' +
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
        '                              Hello from Bibazavr                               \n');
})();
