import React, {ReactNode} from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import View from '../../../basic/components/View/View';
import {Typography, TypographyProp} from '../../../typography';
import {IThemeContext, useStyles} from '../../../styles';

interface IProps {
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
}

const PanelHeader = (props: IProps) => {
  const {
    title,
    titleFont = 'SemiBold-Secondary-M',
    titleStyle,
    titleViewStyle,
    titleView,
    rightView,
    leftView,
    subtitle,
    subtitleFont = 'Regular-Tertiary-XXS',
    subtitleStyle,
    containerStyle,
    rightViewStyle,
    leftViewStyle,
    commonViewStyle,
  } = props;

  const [styles] = useStyles(createStyles);

  return (
    <View style={[styles.commonView, commonViewStyle]}>
      <SafeAreaView edges={['top']}>
        <View style={[styles.container, containerStyle]}>
          <View style={[styles.leftView, leftViewStyle]}>{leftView}</View>

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

          <View style={[styles.rightView, rightViewStyle]}>{rightView}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PanelHeader;

const createStyles = ({spaces}: IThemeContext) =>
  StyleSheet.create({
    commonView: {
      flex: 1,
      width: '100%',
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      paddingHorizontal: spaces.Space20,
      paddingVertical: spaces.Space10,
    },
    leftView: {
      alignItems: 'flex-start',
    },
    titleView: {
      flex: 2,
      paddingHorizontal: spaces.Space8,
    },
    rightView: {
      alignItems: 'flex-end',
    },
    title: {
      textAlign: 'center',
    },
    defaultTitleView: {
      alignItems: 'center',
    },
  });
