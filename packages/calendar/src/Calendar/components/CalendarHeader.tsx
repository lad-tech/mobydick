import {
  Pressable,
  rem,
  SimpleIcon,
  TouchableOpacity,
  Typography,
  useStyles,
  View,
} from '@npm/mobydick-core';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

import {LABELS} from '../constants';

interface ICustomHeaderTitle {
  title: string;
  onPress: () => void;
  onPressLeft: () => void;
  onPressRight: () => void;
}

const CalendarHeader: FC<ICustomHeaderTitle> = props => {
  const {title, onPress, onPressLeft, onPressRight} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPressLeft}
        accessibilityLabel={LABELS.calendarLeftArrow}>
        <SimpleIcon name={'icon-arrow-left'} />
      </Pressable>
      <TouchableOpacity
        onPress={onPress}
        style={styles.title}
        accessibilityLabel={LABELS.calendarPressTitle}>
        <Typography>{title}</Typography>
      </TouchableOpacity>
      <Pressable
        onPress={onPressRight}
        accessibilityLabel={LABELS.calendarRightArrow}>
        <SimpleIcon name={'icon-arrow-right'} />
      </Pressable>
    </View>
  );
};

export default CalendarHeader;

const stylesCreate = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: rem(12),
    },
    title: {
      width: rem(160),
      alignItems: 'center',
    },
  });
