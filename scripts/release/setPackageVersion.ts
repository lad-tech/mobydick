import path from 'path';
import fs from 'fs';

async function writeVersionToPackageJson(filePath: string, version: string) {
  const current = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  current.version = version;

  if (current.peerDependencies) {
    Object.keys(current.peerDependencies).forEach(packageName => {
      if (packageName.includes('@npm/mobydick-')) {
        current.peerDependencies[packageName] = version;
      }
    });
  }

  if (current.dependencies) {
    Object.keys(current.dependencies).forEach(packageName => {
      if (packageName.includes('@npm/mobydick-')) {
        current.dependencies[packageName] = version;
      }
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(current, null, 2));
}

export async function setPackagesVersion(version: string) {
  const src = path.join(__dirname, '../../packages');

  const folders = fs.readdirSync(src);

  await Promise.all(
    folders.map(folder =>
      writeVersionToPackageJson(
        path.join(src, folder, '/package.json'),
        version,
      ),
    ),
  );

  await writeVersionToPackageJson(
    path.join(__dirname, '../../package.json'),
    version,
  );
}
