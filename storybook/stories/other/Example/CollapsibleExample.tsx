import React from 'react';
import {number, select} from '@storybook/addon-knobs';

import {Collapsible, Typography, View} from '@npm/mobydick-core';

const ChildrenView = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Typography>{'one'}</Typography>
      <Typography>{'two'}</Typography>
      <Typography>{'three'}</Typography>
    </View>
  );
};
const CollapsibleExample = () => {
  const duration = number('duration', 250);
  const typeAnimation = select(
    'typeAnimation',
    ['spring', 'linear', 'easeInEaseOut', 'easeIn', 'easeOut', 'keyboard'],
    'easeInEaseOut',
  );
  const creationPropAnimation = select(
    'creationPropAnimation',
    ['opacity', 'scaleX', 'scaleY', 'scaleXY'],
    'opacity',
  );
  return (
    <>
      <Collapsible
        title={'Collapsible 1'}
        duration={duration}
        typeAnimation={typeAnimation}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
      <Collapsible
        title={'Collapsible 2'}
        duration={duration}
        typeAnimation={typeAnimation}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
      <Collapsible
        title={'Collapsible 3'}
        duration={duration}
        typeAnimation={typeAnimation}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
    </>
  );
};

export default CollapsibleExample;
