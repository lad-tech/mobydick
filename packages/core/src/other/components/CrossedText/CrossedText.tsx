import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

import View from '../../../basic/components/View/View';
import {Typography} from '../../../typography';
import rem from '../../../styles/spaces/rem';

import {ICrossedTextProps} from './types';

const CrossedText: FC<ICrossedTextProps> = ({
  children,
  style,
  lineColor,
  lineHeight = rem(1),
  ...props
}) => (
  <View style={style}>
    <Typography {...props}>{children}</Typography>
    <View style={styles.crossed}>
      <View
        style={[styles.line, {backgroundColor: lineColor, height: lineHeight}]}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  crossed: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '100%',
  },
});

export default CrossedText;
