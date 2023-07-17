---
to: <%= path %>/components/<%= name %>/<%= name %>.tsx
---
import React, {FC} from 'react';
import {View} from '@lad-tech/mobydick-core';
import {useStyles} from '@lad-tech/mobydick-core';

import {I<%= name %>Props} from './types';
import stylesCreate from './stylesCreate';

const <%= name %>: FC<I<%= name %>Props> = ({children, ...otherProps}) => {
  const [styles] = useStyles(stylesCreate);
  return <View style={styles.container}>{children}</View>;
};

export default <%= name %>;
