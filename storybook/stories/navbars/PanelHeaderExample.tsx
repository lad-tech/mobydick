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
import React from 'react';
import SimpleIcon from '@npm/mobydick-core/src/styles/icons/font/SimpleIcon';
import {select, text} from '@storybook/addon-knobs';
import {StyleSheet} from 'react-native';

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

  switch (select('panelHeader', IPanelHeader, IPanelHeader.icon)) {
    case IPanelHeader.onlyText:
      return (
        <PanelHeader
          title={title}
          subtitle={subtitle}
          leftView={
            <TouchableOpacity>
              <Typography font={'Regular-Accent-XS'}>{'Отменить'}</Typography>
            </TouchableOpacity>
          }
          rightView={
            <TouchableOpacity>
              <Typography font={'Regular-Accent-XS'}>{'Изменить'}</Typography>
            </TouchableOpacity>
          }
        />
      );
    case IPanelHeader.buttons:
      return (
        <PanelHeader
          title={title}
          subtitle={subtitle}
          leftView={
            <TouchableOpacity style={styles.button}>
              <SimpleIcon name={'icon-arrow-left'} />
            </TouchableOpacity>
          }
          rightView={
            <TouchableOpacity style={styles.button}>
              <SimpleIcon name={'icon-cancel'} />
            </TouchableOpacity>
          }
        />
      );
    case IPanelHeader.twoIcons:
      return (
        <PanelHeader
          title={title}
          subtitle={subtitle}
          leftView={
            <View style={{flexDirection: 'row'}}>
              <SimpleIcon name={'icon-share'} />
              <SimpleIcon name={'icon-copy'} style={styles.icon} />
            </View>
          }
          rightView={
            <View style={{flexDirection: 'row'}}>
              <SimpleIcon name={'icon-share'} />
              <SimpleIcon name={'icon-copy'} style={styles.icon} />
            </View>
          }
        />
      );
    case IPanelHeader.icon:
    default:
      return (
        <PanelHeader
          title={title}
          subtitle={subtitle}
          leftView={
            <SimpleIcon
              name={select('left Icon', iconNames, 'icon-calendar')}
            />
          }
          rightView={
            <SimpleIcon name={select('right Icon', iconNames, 'icon-logout')} />
          }
        />
      );
  }
};

export default PanelHeaderExample;

const createStyles = ({spaces, colors}: IThemeContext) =>
  StyleSheet.create({
    icon: {
      paddingLeft: spaces.Space8,
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
