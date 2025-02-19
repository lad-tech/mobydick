import {FC, useCallback, useState} from 'react';
import {LayoutChangeEvent} from 'react-native';

import View from '../../../../basic/components/View/View';
import {LABELS} from '../../../../other';
import {createStyles, useStyles} from '../../../../styles';
import {IPanelHeaderProps} from '../../../types';
import px from '../../../../styles/utils/px';
import {Typography} from '../../../../typography/components/Typography/Typography';

const ContentHeader: FC<IPanelHeaderProps> = props => {
  const {
    title,
    titleFont = 'SemiBold-Secondary-M',
    titleStyle,
    titleViewStyle,
    titleView,
    rightView,
    leftView,
    subtitle,
    subtitleFont = 'Regular-Tertiary-XS',
    subtitleStyle,
    containerStyle,
    rightViewStyle,
    leftViewStyle,
  } = props;

  const [styles] = useStyles(stylesCreate);
  const [widthLeftView, setWidthLeftView] = useState(px(24));
  const [widthRightView, setWidthRightView] = useState(px(24));

  const onLayoutLeftView = useCallback((event: LayoutChangeEvent) => {
    setWidthLeftView(event.nativeEvent.layout.width);
  }, []);

  const onLayoutRightView = useCallback((event: LayoutChangeEvent) => {
    setWidthRightView(event.nativeEvent.layout.width);
  }, []);

  const widthSideView =
    widthLeftView > widthRightView ? widthLeftView : widthRightView;

  return (
    <View style={[styles.container, containerStyle]}>
      {leftView ? (
        <View
          style={[styles.leftView, {minWidth: widthSideView}, leftViewStyle]}
          onLayout={onLayoutLeftView}
          accessibilityLabel={LABELS.panelHeaderLeftView}>
          {leftView}
        </View>
      ) : (
        <View style={{width: widthRightView}} />
      )}

      <View style={[styles.titleView, titleViewStyle]}>
        {titleView || (
          <View style={styles.defaultTitleView}>
            {title && (
              <Typography
                numberOfLines={1}
                style={[styles.title, titleStyle]}
                font={titleFont}>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                numberOfLines={1}
                style={[styles.title, subtitleStyle]}
                font={subtitleFont}>
                {subtitle}
              </Typography>
            )}
          </View>
        )}
      </View>

      {rightView ? (
        <View
          style={[styles.rightView, {minWidth: widthSideView}, rightViewStyle]}
          onLayout={onLayoutRightView}
          accessibilityLabel={LABELS.panelHeaderRightView}>
          {rightView}
        </View>
      ) : (
        <View style={{width: widthLeftView}} />
      )}
    </View>
  );
};

const stylesCreate = createStyles(({spaces}) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: spaces.Space20,
    paddingVertical: spaces.Space10,
    height: px(60),
  },
  leftView: {
    alignItems: 'flex-start',
    maxWidth: px(96),
  },
  titleView: {
    flex: 2,
    paddingHorizontal: spaces.Space8,
  },
  rightView: {
    alignItems: 'flex-end',
    maxWidth: px(96),
  },
  title: {
    textAlign: 'center',
  },
  defaultTitleView: {
    alignItems: 'center',
  },
}));

export default ContentHeader;
