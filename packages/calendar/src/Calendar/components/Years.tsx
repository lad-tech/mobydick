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

interface IYears {
  onCloseYears: () => void;
  onPressYear: (index: number) => void;
  yearRange: number[];
}

const Years: FC<IYears> = props => {
  const {onCloseYears, onPressYear, yearRange} = props;
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  const onPress = (item: number) => {
    onCloseYears();
    onPressYear(item);
  };

  const renderItem = useCallback(({item}: {item: number}) => {
    return (
      <Pressable
        style={({pressed}) => [
          styles.year,
          {backgroundColor: pressed ? colors.BgAccentSoft : colors.BgPrimary},
        ]}
        accessibilityLabel={'pressYear'}
        onPress={() => onPress(item)}>
        <Typography>{item}</Typography>
      </Pressable>
    );
  }, []);

  return (
    <FlatList
      data={yearRange}
      style={styles.container}
      renderItem={renderItem}
      numColumns={4}
      scrollEnabled={false}
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
