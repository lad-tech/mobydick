import {ReactElement} from 'react';
import {ViewStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

export interface ITab {
  value: string;
  onPress?(): void;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export interface ITabProps {
  item: ITab;
  active: boolean;
  backgroundColorTab?: string;
  fontTab?: TypographyProp;
}
export interface ITabsProps {
  list: ITab[];
  activeValue: string;
  backgroundColorTab?: string;
  fontTab?: TypographyProp;
  containerStyle?: ViewStyle | ViewStyle[];
  contentContainerStyle?: ViewStyle | ViewStyle[];
}
