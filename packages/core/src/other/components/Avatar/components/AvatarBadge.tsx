import React from 'react';

import {IBadge, IBadgeTypes} from '../types';
import {BadgeIndicator, ICounterSize} from '../../Badge';
import Counter from '../../Badge/Counter/Counter';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import View from '../../../../basic/components/View/View';

interface IProps {
  badge?: IBadge;
}

const AvatarBadge = (props: IProps): JSX.Element | null => {
  const {badge} = props;

  if (badge?.type === IBadgeTypes.indicator) {
    return (
      <BadgeIndicator
        type={badge.value}
        style={{
          bottom: 2,
          right: 2,
        }}
      />
    );
  }

  if (badge?.type === IBadgeTypes.counter) {
    return (
      <Counter
        type={badge.value}
        style={{
          bottom: -3,
          right: -3,
          zIndex: 20,
        }}
        size={ICounterSize.small}
        count={badge.count}
      />
    );
  }
  if (badge?.type === IBadgeTypes.status) {
    return (
      <View style={{position: 'absolute', zIndex: 1, bottom: 0, right: 0}}>
        <SimpleIcon name={badge.value} size={12} />
      </View>
    );
  }

  return null;
};

export default AvatarBadge;
