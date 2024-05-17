"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackagesList = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function getPackagesList() {
    const basePath = path_1.default.join(__dirname, '../../packages');
    const packagesPaths = fs_1.default.readdirSync(basePath);
    const packages = [];
    for (const packagePath of packagesPaths) {
        const packageJsonPath = path_1.default.join(basePath, packagePath, 'package.json');
        if (fs_1.default.realpathSync(packageJsonPath)) {
            packages.push({
                path: path_1.default.join(basePath, packagePath),
                packageJsonPath,
                packageJson: JSON.parse(fs_1.default.readFileSync(packageJsonPath, { encoding: 'utf-8' })),
            });
        }
    }
    return packages;
}
exports.getPackagesList = getPackagesList;
