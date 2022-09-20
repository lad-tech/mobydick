import React from 'react';
import {FlatList} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import {ITab, ITabsProps} from '../../types';

import stylesCreate from './stylesCreate';
import Tab from './Tab';

const renderItem = ({item}: {item: ITab}) => {
  return <Tab item={item} />;
};

const Tabs = (props: ITabsProps) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <FlatList
      data={props.list}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      horizontal
    />
  );
};

export default Tabs;
