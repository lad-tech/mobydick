import React from 'react';
import {View} from '@npm/mobydick-core';

import style from './style';

export default function CenterView({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <View style={style.main}>{children}</View>;
}
