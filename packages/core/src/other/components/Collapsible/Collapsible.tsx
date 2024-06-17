import {useCallback, useMemo, useState} from 'react';
import {LayoutAnimation, Platform, UIManager} from 'react-native';

import {TypographyLegacy} from '../../../typography';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import SimpleIcon from '../../../styles/icons/font/SimpleIcon';
import View from '../../../basic/components/View/View';
import useTheme from '../../../styles/hooks/useTheme';
import useStyles from '../../../styles/hooks/useStyles';
import {LABELS} from '../../constants';
import {createStyles} from '../../../styles';

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
  const [styles] = useStyles(stylesCreate);
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
        <TypographyLegacy
          font={fontTitle}
          numberOfLines={numberOfLines}
          style={[styles.title, titleStyle]}>
          {title}
        </TypographyLegacy>
        <SimpleIcon name={name} color={colors.IconNeutral} />
      </TouchableOpacity>
      {titleBottomView}
      {collapsed && children}
    </View>
  );
};

const stylesCreate = createStyles(({spaces}) => ({
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
}));

export default Collapsible;
