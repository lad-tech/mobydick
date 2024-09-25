import {View, type ViewProps} from 'react-native';

import {useTheme} from '@/shared/ui';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({style, ...otherProps}: ThemedViewProps) {
  const {colors} = useTheme();

  return (
    <View
      style={[{backgroundColor: colors.BgPrimary}, style]}
      {...otherProps}
    />
  );
}
