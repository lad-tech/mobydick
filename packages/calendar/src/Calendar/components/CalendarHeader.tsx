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

export interface ITitle {
  currMonth?: string | undefined;
  currYear?: string | undefined;
}

interface ICustomHeaderTitle {
  title: ITitle;
  onPressMonth?: () => void;
  onPressYear: () => void;
  onPressLeft: () => void;
  onPressRight: () => void;
}

const CalendarHeader: FC<ICustomHeaderTitle> = props => {
  const {title, onPressMonth, onPressYear, onPressLeft, onPressRight} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPressLeft}
        accessibilityLabel={LABELS.calendarLeftArrow}>
        <SimpleIcon name={'icon-arrow-left'} />
      </Pressable>
      <View style={styles.title}>
        {Boolean(title.currMonth) && (
          <TouchableOpacity
            onPress={onPressMonth}
            accessibilityLabel={LABELS.calendarPressTitleMonth}>
            <Typography font={'Medium-Primary-M'}>{title.currMonth}</Typography>
          </TouchableOpacity>
        )}
        {Boolean(title.currYear) && (
          <TouchableOpacity
            onPress={onPressYear}
            accessibilityLabel={LABELS.calendarPressTitleYear}>
            <Typography font={'Medium-Primary-M'}>{title.currYear}</Typography>
          </TouchableOpacity>
        )}
      </View>

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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
