import {
  createStyles,
  Pressable,
  px,
  SimpleIcon,
  TouchableOpacity,
  TypographyLegacy,
  useStyles,
  View,
} from '@lad-tech/mobydick-core';
import {FC} from 'react';

import {LABELS} from '../constants';
import {ITitle} from '../types';

interface ICustomHeader {
  title: ITitle;
  onPressMonth?: () => void;
  onPressYear: () => void;
  onPressLeft: () => void;
  onPressRight: () => void;
}

const CalendarHeader: FC<ICustomHeader> = props => {
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
            <TypographyLegacy font={'Medium-Primary-M'}>
              {title.currMonth}
            </TypographyLegacy>
          </TouchableOpacity>
        )}
        {Boolean(title.currYear) && (
          <TouchableOpacity
            onPress={onPressYear}
            accessibilityLabel={LABELS.calendarPressTitleYear}>
            <TypographyLegacy font={'Medium-Primary-M'}>
              {title.currYear}
            </TypographyLegacy>
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

const stylesCreate = createStyles(_ => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: px(12),
  },
  title: {
    width: px(160),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
