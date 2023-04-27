import {ReactElement, ReactNode} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {Edge} from 'react-native-safe-area-context/src/SafeArea.types';

import {TypographyProp} from '../typography/types';

export interface ITab<T extends string | number = string | number> {
  value: T;
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

export interface IPanelHeaderProps {
  title?: string;
  subtitle?: string;
  titleView?: ReactNode;
  titleStyle?: TextStyle;
  titleFont?: TypographyProp;
  subtitleStyle?: TextStyle;
  subtitleFont?: TypographyProp;
  titleViewStyle?: ViewStyle;
  rightView?: ReactNode;
  leftView?: ReactNode;
  rightViewStyle?: ViewStyle;
  leftViewStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  commonViewStyle?: ViewStyle;
  isSafeAreaView?: boolean;
  edges?: ReadonlyArray<Edge>;
}
