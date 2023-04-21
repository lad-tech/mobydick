import React from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {StyleSheet} from 'react-native';

import SimpleIcon from '@npm/mobydick-core/src/styles/icons/font/SimpleIcon';
import {
  iconNames,
  IThemeContext,
  PanelHeader,
  rem,
  TouchableOpacity,
  Typography,
  useStyles,
  View,
} from '@npm/mobydick-core';

enum IPanelHeader {
  icon = 'icon',
  onlyText = 'text',
  buttons = 'buttons',
  twoIcons = 'twoIcons',
}
const PanelHeaderExample = () => {
  const [styles] = useStyles(createStyles);

  const title = text('title', 'Title');
  const subtitle = text('subtitle', 'Subtitle');
  const isRightView = boolean('isRightView', false);
  const isLeftView = boolean('isLeftView', false);
  const isTwoLeftIcon = boolean('isTwoLeftIcon', true);
  const isTwoRightIcon = boolean('isTwoRightIcon', true);
  switch (select('panelHeader', IPanelHeader, IPanelHeader.icon)) {
    case IPanelHeader.onlyText:
      return (
        <PanelHeader
          title={title}
          subtitle={subtitle}
          leftView={
            isLeftView && (
              <TouchableOpacity>
                <Typography font={'Regular-Accent-XS'}>{'Отменить'}</Typography>
              </TouchableOpacity>
            )
          }
          rightView={
            isRightView && (
              <TouchableOpacity>
                <Typography font={'Regular-Accent-XS'}>{'Изменить'}</Typography>
              </TouchableOpacity>
            )
          }
          commonViewStyle={styles.commonView}
        />
      );
    case IPanelHeader.buttons:
      return (
        <PanelHeader
          title={title}
          subtitle={subtitle}
          leftView={
            isLeftView && (
              <TouchableOpacity style={styles.button}>
                <SimpleIcon name={'icon-arrow-left'} />
              </TouchableOpacity>
            )
          }
          rightView={
            isRightView && (
              <TouchableOpacity style={styles.button}>
                <SimpleIcon name={'icon-cancel'} />
              </TouchableOpacity>
            )
          }
          commonViewStyle={styles.commonView}
        />
      );
    case IPanelHeader.twoIcons:
      return (
        <PanelHeader
          title={title}
          subtitle={subtitle}
          leftView={
            isLeftView && (
              <View style={{flexDirection: 'row'}}>
                <SimpleIcon name={'icon-share'} />
                {isTwoLeftIcon && (
                  <SimpleIcon name={'icon-copy'} style={styles.icon} />
                )}
              </View>
            )
          }
          rightView={
            isRightView && (
              <View style={{flexDirection: 'row'}}>
                <SimpleIcon name={'icon-share'} />
                {isTwoRightIcon && (
                  <SimpleIcon name={'icon-copy'} style={styles.icon} />
                )}
              </View>
            )
          }
          commonViewStyle={styles.commonView}
        />
      );

    case IPanelHeader.icon:
    default:
      return (
        <PanelHeader
          title={title}
          subtitle={subtitle}
          leftView={
            isLeftView && (
              <SimpleIcon
                name={select('left Icon', iconNames, 'icon-calendar')}
              />
            )
          }
          rightView={
            isRightView && (
              <SimpleIcon
                name={select('right Icon', iconNames, 'icon-logout')}
              />
            )
          }
          commonViewStyle={styles.commonView}
        />
      );
  }
};

export default PanelHeaderExample;

const createStyles = ({spaces, colors}: IThemeContext) =>
  StyleSheet.create({
    commonView: {
      flex: 1,
    },
    icon: {
      paddingLeft: spaces.Space12,
    },
    button: {
      width: rem(40),
      height: rem(40),
      backgroundColor: colors.BgSecondary,
      borderRadius: spaces.Space12,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
