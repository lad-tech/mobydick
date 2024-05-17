"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncrementedVersion = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const VERSION_INCREMENT = ['patch', 'minor', 'major'];
const VERSION_STAGE = ['alpha', 'beta'];
function getIncrementedVersion(version, options) {
    if (!VERSION_INCREMENT.includes(options.type)) {
        logger_1.default.error(`Incorrect version type: ${options.type}, it should be one of these values: ${VERSION_INCREMENT.join(', ')}`);
        return process.exit(1);
    }
    if (options.stage && !VERSION_STAGE.includes(options.stage)) {
        logger_1.default.error(`Incorrect version stage: ${options.stage}, it should be one of these values: ${VERSION_STAGE.join(', ')}`);
        return process.exit(1);
    }
    const updateVersion = (raw) => {
        const splitted = raw.split('.');
        if (options.type === 'patch') {
            splitted[2] = (parseInt(splitted[2], 10) + 1).toString();
        }
        if (options.type === 'minor') {
            splitted[1] = (parseInt(splitted[1], 10) + 1).toString();
            splitted[2] = '0';
        }
        if (options.type === 'major') {
            splitted[0] = (parseInt(splitted[0], 10) + 1).toString();
            splitted[1] = '0';
            splitted[2] = '0';
        }
        return splitted.join('.');
    };
    const updateStage = (raw) => {
        const [name, no] = (raw || '').split('.');
        if (!raw || name !== options.stage) {
            return `${options.stage}.0`;
        }
        return `${name}.${parseInt(no, 10) + 1}`;
    };
    const [rawVersion, rawStage] = version.split('-');
    // entering prerelease
    if (!rawStage && options.stage) {
        return `${updateVersion(rawVersion)}-${updateStage(rawStage)}`;
    }
    // exiting prerelase
    if (rawStage && !options.stage) {
        return rawVersion;
    }
    // release
    if (!rawStage && !options.stage) {
        return updateVersion(rawVersion);
    }
    // prerelease
    return `${rawVersion}-${updateStage(rawStage)}`;
}
exports.getIncrementedVersion = getIncrementedVersion;
