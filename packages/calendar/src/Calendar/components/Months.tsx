import React, {FC, useCallback} from 'react';
import {
  FlatList,
  IThemeContext,
  Pressable,
  Typography,
  useStyles,
} from '@npm/mobydick-core';
import {StyleSheet} from 'react-native';
import useTheme from '@npm/mobydick-core/src/styles/theme/hooks/useTheme';

import {LABELS} from '../constants';

interface IMonths {
  onCloseMonths: () => void;
  onPressMonth: (index: number) => void;
  monthNamesShort: string[];
}

const Months: FC<IMonths> = props => {
  const {onCloseMonths, onPressMonth, monthNamesShort} = props;
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  const onPress = useCallback(
    (index: number) => {
      onCloseMonths();
      onPressMonth(index);
    },
    [onCloseMonths, onPressMonth],
  );
  const getStyle = useCallback(
    ({pressed}) => [
      styles.month,
      {backgroundColor: pressed ? colors.BgAccentSoft : colors.BgPrimary},
    ],
    [colors.BgAccentSoft, colors.BgPrimary],
  );

  const renderItem = useCallback(
    ({item, index}: {item: string; index: number}) => {
      return (
        <Pressable
          style={getStyle}
          accessibilityLabel={LABELS.pressMonth}
          onPress={() => onPress(index)}>
          <Typography>{item}</Typography>
        </Pressable>
      );
    },
    [],
  );

  return (
    <FlatList
      data={monthNamesShort}
      style={styles.container}
      renderItem={renderItem}
      numColumns={3}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Months;

const stylesCreate = ({spaces}: IThemeContext) =>
  StyleSheet.create({
    month: {
      flex: 3,
      paddingVertical: spaces.Space20,
      alignItems: 'center',
      borderRadius: spaces.Space4,
    },
    container: {
      width: '100%',
      alignContent: 'center',
    },
  });
