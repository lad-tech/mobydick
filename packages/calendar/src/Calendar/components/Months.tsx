import React, {FC} from 'react';
import {
  FlatList,
  IThemeContext,
  TouchableOpacity,
  Typography,
  useStyles,
} from '@npm/mobydick-core';
import {StyleSheet} from 'react-native';

import {localeConfigRu} from '../localeConfig';

interface IMonths {
  onCloseMonths: () => void;
  onPressMonth: (index: number) => void;
}

const Months: FC<IMonths> = props => {
  const [styles] = useStyles(stylesCreate);

  const renderItem = ({item, index}: {item: string; index: number}) => {
    const onPress = () => {
      props.onCloseMonths();
      props.onPressMonth(index);
    };

    return (
      <TouchableOpacity style={styles.month} onPress={onPress}>
        <Typography>{item}</Typography>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={localeConfigRu.monthNamesShort}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
      numColumns={3}
      scrollEnabled={false}
    />
  );
};

export default Months;

const stylesCreate = ({spaces}: IThemeContext) =>
  StyleSheet.create({
    month: {
      flex: 3,
      paddingVertical: spaces.Space20,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
    },
    container: {
      width: '100%',
      alignContent: 'center',
    },
    contentContainer: {
      width: '100%',
      justifyContent: 'center',
    },
  });
