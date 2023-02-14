import {execSync} from 'child_process';

import logger from '../utils/logger';

export async function publishPackage({
  path,
  name,
  tag,
}: {
  path: string;
  name: string;
  tag: string;
}) {
  try {
    execSync(`yarn --cwd ${path} build`);
    execSync(`npm publish ${path} --tag ${tag}`);
    logger.info(`Package ${name} was published`);
  } catch (error: any) {
    logger.error(`Failed to publish package ${name}`);
    process.stdout.write(`${error.message}\n`);
    process.exit(1);
  }
}
