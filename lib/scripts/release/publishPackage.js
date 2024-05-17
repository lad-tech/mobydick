"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishPackage = void 0;
const child_process_1 = require("child_process");
const logger_1 = __importDefault(require("../utils/logger"));
async function publishPackage({ path, name, tag, }) {
    try {
        (0, child_process_1.execSync)(`yarn --cwd ${path} build`);
        (0, child_process_1.execSync)(`npm publish ${path} --tag ${tag}`);
        logger_1.default.info(`Package ${name} was published`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        logger_1.default.error(`Failed to publish package ${name}`);
        process.stdout.write(`${error?.message}\n`);
        process.exit(1);
    }
}
exports.publishPackage = publishPackage;
