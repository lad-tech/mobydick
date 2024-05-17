"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPackagesVersion = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
async function writeVersionToPackageJson(filePath, version) {
    const current = JSON.parse(fs_1.default.readFileSync(filePath, 'utf8'));
    current.version = version;
    if (current.peerDependencies) {
        Object.keys(current.peerDependencies).forEach(packageName => {
            if (packageName.includes('@lad-tech/mobydick-')) {
                current.peerDependencies[packageName] = version;
            }
        });
    }
    if (current.dependencies) {
        Object.keys(current.dependencies).forEach(packageName => {
            if (packageName.includes('@lad-tech/mobydick-')) {
                current.dependencies[packageName] = version;
            }
        });
    }
    fs_1.default.writeFileSync(filePath, JSON.stringify(current, null, 2));
}
async function setPackagesVersion(version) {
    const src = path_1.default.join(__dirname, '../../packages');
    const folders = fs_1.default.readdirSync(src);
    await Promise.all(folders.map(folder => writeVersionToPackageJson(path_1.default.join(src, folder, '/package.json'), version)));
    await writeVersionToPackageJson(path_1.default.join(__dirname, '../../package.json'), version);
}
exports.setPackagesVersion = setPackagesVersion;
