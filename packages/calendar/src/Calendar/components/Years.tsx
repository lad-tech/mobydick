import React, {FC, useCallback} from 'react';
import {
  FlatList,
  IThemeContext,
  Pressable,
  Typography,
  useStyles,
} from '@lad-tech/mobydick-core';
import {StyleSheet} from 'react-native';
import useTheme from '@lad-tech/mobydick-core/src/styles/theme/hooks/useTheme';

import {LABELS} from '../constants';

interface IYears {
  onCloseYears: () => void;
  onPressYear: (index: number) => void;
  yearRange: number[];
}

const Years: FC<IYears> = props => {
  const {onCloseYears, onPressYear, yearRange} = props;
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  const onPress = useCallback(
    (item: number) => () => {
      onCloseYears();
      onPressYear(item);
    },
    [onCloseYears, onPressYear],
  );

  const getStyle = useCallback(
    ({pressed}: {pressed: boolean}) => [
      styles.year,
      {backgroundColor: pressed ? colors.BgAccentSoft : colors.BgPrimary},
    ],
    [],
  );

  const renderItem = useCallback(({item}: {item: number}) => {
    return (
      <Pressable
        style={getStyle}
        accessibilityLabel={LABELS.pressYear}
        onPress={onPress(item)}>
        <Typography>{item}</Typography>
      </Pressable>
    );
  }, []);

  return (
    <FlatList
      data={yearRange}
      style={styles.container}
      renderItem={renderItem}
      numColumns={3}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Years;

const stylesCreate = ({spaces}: IThemeContext) =>
  StyleSheet.create({
    year: {
      flex: 4,
      paddingVertical: spaces.Space20,
      alignItems: 'center',
      borderRadius: spaces.Space4,
    },
    container: {
      width: '100%',
      alignContent: 'center',
    },
  });
