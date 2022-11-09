import {ReactElement} from 'react';
import {ViewStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

export interface ITab {
  value: string;
  onPress?(): void;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

interface ITabStyle {
  fontTab?: TypographyProp;
  fontActiveTab?: TypographyProp;
  backgroundColorTab?: string;
  backgroundColorActiveTab?: string;
}
export interface ITabProps extends ITabStyle {
  item: ITab;
  active: boolean;
}

export interface ITabsProps extends ITabStyle {
  list: ITab[];
  activeValue: string;
  containerStyle?: ViewStyle | ViewStyle[];
  contentContainerStyle?: ViewStyle | ViewStyle[];
}
