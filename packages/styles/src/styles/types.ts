import {getCurrentColors, getSpaces} from '@npm/mobydick-styles';

export interface IUseStylesTheme {
  colors: ReturnType<typeof getCurrentColors>;
  spaces: ReturnType<typeof getSpaces>;
}
