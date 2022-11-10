import React from 'react';
import {FlatList, View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import {ITab, ITabsProps} from '../../types';

import stylesCreate from './stylesCreate';
import Tab from './Tab';

const Tabs = (props: ITabsProps) => {
  const [styles] = useStyles(stylesCreate);
  const {
    list,
    activeLabel,
    containerStyle,
    contentContainerStyle,
    ...otherProps
  } = props;

  const renderItem = ({item}: {item: ITab}) => {
    return (
      <Tab
        item={item}
        active={Boolean(activeLabel === item.label)}
        {...otherProps}
      />
    );
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        data={list}
        renderItem={renderItem}
        style={[styles.containerStyle, containerStyle]}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          contentContainerStyle,
        ]}
        horizontal
      />
    </View>
  );
};

export default Tabs;
