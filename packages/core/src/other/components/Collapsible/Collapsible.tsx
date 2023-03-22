import React, {ReactChild, useCallback, useMemo, useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacityProps,
  UIManager,
  ViewStyle,
} from 'react-native';

import {Typography, TypographyProp} from '../../../typography';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import SimpleIcon from '../../../styles/icons/font/SimpleIcon';
import View from '../../../basic/components/View/View';
import {IThemeContext} from '../../../styles';
import useTheme from '../../../styles/theme/hooks/useTheme';
import useStyles from '../../../styles/theme/hooks/useStyles';
import {LABELS} from '../../constants';
import rem from '../../../styles/spaces/rem';

interface IProps extends TouchableOpacityProps {
  title?: string;
  children?: ReactChild;
  duration?: number;
  containerStyle?: ViewStyle | ViewStyle[];
  headerStyle?: ViewStyle | ViewStyle[];
  fontTitle?: TypographyProp;
}

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Collapsible = (props: IProps) => {
  const {
    title,
    children,
    duration = 250,
    containerStyle,
    fontTitle = 'SemiBold-Secondary-M',
    headerStyle,
  } = props;
  const [styles] = useStyles(createStyles);
  const {colors} = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  const onPress = useCallback(() => {
    setCollapsed(!collapsed);
    LayoutAnimation.configureNext(
      LayoutAnimation.create(duration, 'linear', 'opacity'),
    );
  }, [collapsed, duration]);

  const name = useMemo(() => {
    return collapsed ? 'icon-arrow-down' : 'icon-arrow-right';
  }, [collapsed]);

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.header, headerStyle]}
        accessibilityLabel={LABELS.collapsed}>
        <Typography font={fontTitle}>{title}</Typography>
        <SimpleIcon name={name} color={colors.IconNeutral} />
      </TouchableOpacity>
      {collapsed && children}
    </View>
  );
};

const createStyles = ({spaces}: IThemeContext) =>
  StyleSheet.create({
    container: {
      width: '100%',
      padding: spaces.Space20,
    },
    header: {
      flexDirection: 'row',
      height: rem(44),
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export default Collapsible;
