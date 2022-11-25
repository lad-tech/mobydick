import logger from '../utils/logger';

const VERSION_INCREMENT: string[] = ['patch', 'minor', 'major'];
const VERSION_STAGE: string[] = ['alpha', 'beta'];

export function getIncrementedVersion(
  version: string,
  options: {type: string; stage?: string | undefined},
): string {
  if (!VERSION_INCREMENT.includes(options.type)) {
    logger.error(
      `Incorrect version type: ${
        options.type
      }, it should be one of these values: ${VERSION_INCREMENT.join(', ')}`,
    );

    return process.exit(1);
  }

  if (options.stage && !VERSION_STAGE.includes(options.stage)) {
    logger.error(
      `Incorrect version stage: ${
        options.stage
      }, it should be one of these values: ${VERSION_STAGE.join(', ')}`,
    );

    return process.exit(1);
  }

  const updateVersion = (raw: string): string => {
    const splitted = raw.split('.') as [string, string, string];

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

  const updateStage = (raw: string): string => {
    const [name, no] = (raw || '').split('.') as [string, string];

    if (!raw || name !== options.stage) {
      return `${options.stage}.0`;
    }

    return `${name}.${parseInt(no, 10) + 1}`;
  };

  const [rawVersion, rawStage] = version.split('-') as [string, string];

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
