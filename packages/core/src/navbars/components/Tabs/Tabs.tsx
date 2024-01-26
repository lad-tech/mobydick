import {useCallback} from 'react';

import useStyles from '../../../styles/theme/hooks/useStyles';
import {ITab, ITabsProps} from '../../types';
import View from '../../../basic/components/View/View';
import FlatList from '../../../basic/components/FlatList/FlatList';

import stylesCreate from './stylesCreate';
import Tab from './Tab';

const Tabs = (props: ITabsProps) => {
  const [styles] = useStyles(stylesCreate);
  const {
    list,
    activeValue,
    containerStyle,
    contentContainerStyle,
    ...otherProps
  } = props;

  const renderItem = useCallback(
    ({item}: {item: ITab}) => {
      return (
        <Tab
          item={item}
          active={Boolean(activeValue === item.value)}
          {...otherProps}
        />
      );
    },
    [activeValue, otherProps],
  );

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
