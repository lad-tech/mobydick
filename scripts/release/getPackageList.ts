import path from 'path';
import fs from 'fs';

interface IPackageJson {
  readonly name: string;
  readonly version: string;
  readonly private: boolean;
  readonly main: string;
  readonly license: string;
  readonly types?: string;
  readonly author: string;
  readonly sideEffects?: boolean;
  readonly scripts?: Record<string, string>;
  readonly peerDependencies?: Record<string, string>;
  readonly dependencies?: Record<string, string>;
  readonly devDependencies?: Record<string, string>;
}

export interface IPackage {
  path: string;
  packageJsonPath: string;
  packageJson: IPackageJson;
}

export function getPackagesList() {
  const basePath = path.join(__dirname, '../../packages');
  const packagesPaths = fs.readdirSync(basePath);
  const packages: IPackage[] = [];

  for (const packagePath of packagesPaths) {
    const packageJsonPath = path.join(basePath, packagePath, 'package.json');
    if (fs.realpathSync(packageJsonPath)) {
      packages.push({
        path: path.join(basePath, packagePath),
        packageJsonPath,
        packageJson: JSON.parse(
          fs.readFileSync(packageJsonPath, {encoding: 'utf-8'}),
        ),
      });
    }
  }

  return packages;
}
