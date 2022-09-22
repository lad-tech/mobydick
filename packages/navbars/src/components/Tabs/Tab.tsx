import React from 'react';
import {TouchableOpacity} from '@npm/mobydick-core';
import {Typography} from '@npm/mobydick-typography';
import {useStyles} from '@npm/mobydick-styles';

import {ITabProps} from '../../types';

import stylesCreate from './stylesCreate';
import {accessibilityLabels} from './constants';

const Tab = (props: ITabProps): JSX.Element => {
  const [styles, theme] = useStyles(stylesCreate);
  const {active, item, fontTab, backgroundColorTab} = props;

  const font = active ? 'Medium-White-XS' : 'Regular-Tertiary-XS';
  const backgroundColor = active
    ? theme.colors.ElementBase
    : theme.colors.BgTertiary;

  return (
    <TouchableOpacity
      onPress={item.onPress}
      accessibilityLabel={accessibilityLabels.tab}
      style={[
        styles.tab,
        {
          backgroundColor: backgroundColorTab
            ? backgroundColorTab
            : backgroundColor,
        },
      ]}>
      {item.leftIcon ? item.leftIcon : null}
      <Typography font={fontTab ? fontTab : font}>{item.value}</Typography>
      {item.rightIcon ? item.rightIcon : null}
    </TouchableOpacity>
  );
};

export default Tab;
