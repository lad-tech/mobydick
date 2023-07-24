import React from 'react';
import {StyleSheet} from 'react-native';

import SimpleIcon, {
  SimpleIconName,
} from '@lad-tech/mobydick-core/src/styles/icons/font/SimpleIcon';
import {
  IThemeContext,
  PanelHeader,
  rem,
  TouchableOpacity,
  Typography,
  useStyles,
  View,
} from '@lad-tech/mobydick-core';

export enum IPanelHeader {
  icon = 'icon',
  onlyText = 'text',
  buttons = 'buttons',
  twoIcons = 'twoIcons',
}
const PanelHeaderExample = ({
  title,
  subtitle,
  isRightView,
  isLeftView,
  isTwoLeftIcon,
  isTwoRightIcon,
  panelHeader,
  leftIcon,
  rightIcon,
}: {
  title: string;
  subtitle: string;
  isRightView: boolean;
  isLeftView: boolean;
  isTwoLeftIcon: boolean;
  isTwoRightIcon: boolean;
  panelHeader: IPanelHeader;
  leftIcon: SimpleIconName;
  rightIcon: SimpleIconName;
}) => {
  const [styles] = useStyles(createStyles);

  switch (panelHeader) {
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
          leftView={isLeftView && <SimpleIcon name={leftIcon} />}
          rightView={isRightView && <SimpleIcon name={rightIcon} />}
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
