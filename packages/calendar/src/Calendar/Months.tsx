import React, {FC} from 'react';
import {FlatList, rem, TouchableOpacity, Typography} from '@npm/mobydick-core';

import {localeConfigRu} from './localeConfig';
interface IMonths {
  setIsDays: () => void;
  setMonth: (index: number) => void;
}

const Months: FC<IMonths> = props => {
  const renderItem = ({item, index}: {item: string; index: number}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 3,
          paddingVertical: rem(20),
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          props.setIsDays();
          props.setMonth(index);
        }}>
        <Typography>{item}</Typography>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={localeConfigRu.monthNamesShort}
      style={{width: '100%', alignContent: 'center'}}
      contentContainerStyle={{width: '100%', justifyContent: 'center'}}
      renderItem={renderItem}
      numColumns={3}
      scrollEnabled={false}
    />
  );
};

export default Months;
