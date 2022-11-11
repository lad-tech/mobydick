import {ReactElement} from 'react';
import {ViewStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

export interface ITab {
  value: string | number;
  label: string;
  onPress?(): void;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

interface ITabCommon {
  fontTab?: TypographyProp;
  fontActiveTab?: TypographyProp;
  backgroundColorTab?: string;
  backgroundColorActiveTab?: string;
  onPressCommon?(item: ITab): void;
}

export interface ITabProps extends ITabCommon {
  item: ITab;
  active: boolean;
}

export interface ITabsProps extends ITabCommon {
  list: ITab[];
  activeValue: string | number;
  containerStyle?: ViewStyle | ViewStyle[];
  contentContainerStyle?: ViewStyle | ViewStyle[];
}
