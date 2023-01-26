import {
  Pressable,
  rem,
  SimpleIcon,
  TouchableOpacity,
  Typography,
  View,
} from '@npm/mobydick-core';
import React, {FC} from 'react';

interface ICustomHeaderTitle {
  title: string;
  onPress: () => void;
  onPressLeft: () => void;
  onPressRight: () => void;
}

const CalendarHeader: FC<ICustomHeaderTitle> = props => {
  const {title, onPress, onPressLeft, onPressRight} = props;

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Pressable onPress={onPressLeft}>
        <SimpleIcon name={'icon-arrow-left'} />
      </Pressable>
      <TouchableOpacity
        onPress={onPress}
        style={{width: rem(160), alignItems: 'center'}}>
        <Typography>{title}</Typography>
      </TouchableOpacity>
      <Pressable onPress={onPressRight}>
        <SimpleIcon name={'icon-arrow-right'} />
      </Pressable>
    </View>
  );
};

export default CalendarHeader;
