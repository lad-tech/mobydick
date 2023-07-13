import React, {useCallback, useMemo, useState} from 'react';
import {LayoutAnimation, Platform, StyleSheet, UIManager} from 'react-native';

import {Typography} from '../../../typography';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import SimpleIcon from '../../../styles/icons/font/SimpleIcon';
import View from '../../../basic/components/View/View';
import {IThemeContext} from '../../../styles';
import useTheme from '../../../styles/theme/hooks/useTheme';
import useStyles from '../../../styles/theme/hooks/useStyles';
import {LABELS} from '../../constants';

import {ICollapsibleProps} from './types';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Collapsible = (props: ICollapsibleProps) => {
  const {
    title,
    children,
    duration = 250,
    containerStyle,
    fontTitle = 'SemiBold-Secondary-M',
    headerStyle,
    titleStyle,
    typeAnimation = 'easeInEaseOut',
    creationPropAnimation = 'scaleY',
    numberOfLines = 2,
    initialState = false,
    isAnimated = true,
    titleBottomView,
  } = props;
  const [styles] = useStyles(createStyles);
  const {colors} = useTheme();
  const [collapsed, setCollapsed] = useState(initialState);

  const onPress = useCallback(() => {
    setCollapsed(!collapsed);
    isAnimated &&
      LayoutAnimation.configureNext(
        LayoutAnimation.create(duration, typeAnimation, creationPropAnimation),
      );
  }, [collapsed, duration, isAnimated]);

  const name = useMemo(() => {
    return collapsed ? 'icon-arrow-down' : 'icon-arrow-right';
  }, [collapsed]);

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.header, headerStyle]}
        accessibilityLabel={LABELS.collapsed}>
        <Typography
          font={fontTitle}
          numberOfLines={numberOfLines}
          style={[styles.title, titleStyle]}>
          {title}
        </Typography>
        <SimpleIcon name={name} color={colors.IconNeutral} />
      </TouchableOpacity>
      {titleBottomView}
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
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      flex: 1,
    },
  });

export default Collapsible;
