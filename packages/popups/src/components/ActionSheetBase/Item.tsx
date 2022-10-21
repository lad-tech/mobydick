import {Pressable} from '@npm/mobydick-core';
import React, {FC} from 'react';
import {useStyles, useTheme} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import Contents from './content/Contents';
import {IPropsItem} from './types';

const Item: FC<IPropsItem> = props => {
  const {onPress, style, disabled, itemType} = props;
  const [styles] = useStyles(stylesCreate, itemType);
  const {colors} = useTheme();

  return (
    <Pressable
      style={({pressed}) => [
        styles.item,
        {backgroundColor: pressed ? colors.BgSecondary : colors.BgPrimary},
        style,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Contents {...props} />
    </Pressable>
  );
};

export default Item;
