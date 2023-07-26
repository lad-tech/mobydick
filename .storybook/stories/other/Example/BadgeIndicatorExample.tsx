import React from 'react';

import {
  BadgeIndicator,
  Button,
  IButtonTypes,
  IIndicatorTypes,
  View,
} from '@lad-tech/mobydick-core';

const BadgeIndicatorExample = ({
  type,
  top,
  right,
}: {
  type: IIndicatorTypes;
  top: number;
  right: number;
}) => {
  return (
    <View>
      <BadgeIndicator
        type={type}
        style={{
          top,
          right,
        }}
      />
      <Button text={'Кнопка'} type={IButtonTypes.secondary} />
    </View>
  );
};
export default BadgeIndicatorExample;
