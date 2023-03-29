import React from 'react';
import {number, select, text} from '@storybook/addon-knobs';

import {Collapsible, ScrollView, Typography, View} from '@npm/mobydick-core';

const ChildrenView = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Typography font={'SemiBold-Primary-S'}>
        {'LayoutAnimationType'}
      </Typography>
      <Typography>{'spring'}</Typography>
      <Typography>{'linear'}</Typography>
      <Typography>{'easeInEaseOut'}</Typography>
      <Typography>{'easeIn'}</Typography>
      <Typography>{'easeOut'}</Typography>
      <Typography>{'keyboard'}</Typography>
      <Typography font={'SemiBold-Primary-S'}>
        {'LayoutAnimationProperty'}
      </Typography>
      <Typography>{'opacity'}</Typography>
      <Typography>{'scaleX'}</Typography>
      <Typography>{'scaleY'}</Typography>
      <Typography>{'scaleXY'}</Typography>
    </View>
  );
};
const CollapsibleExample = () => {
  const duration = number('duration', 250);
  const typeAnimation = select(
    'typeAnimation',
    ['linear', 'easeInEaseOut', 'easeIn', 'easeOut'],
    'easeInEaseOut',
  );
  const creationPropAnimation = select(
    'creationPropAnimation',
    ['opacity', 'scaleX', 'scaleY', 'scaleXY'],
    'opacity',
  );
  const titleOne = text('titleOne', 'Collapsible 1');
  const titleTwo = text('titleTwo', 'Collapsible 2');
  const titleThree = text('titleThree', 'Collapsible 3');
  const numberOfLines = number('numberOfLines', 2);
  return (
    <ScrollView style={{width: '100%'}}>
      <Collapsible
        title={titleOne}
        duration={duration}
        typeAnimation={typeAnimation}
        numberOfLines={numberOfLines}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
      <Collapsible
        title={titleTwo}
        duration={duration}
        typeAnimation={typeAnimation}
        numberOfLines={numberOfLines}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
      <Collapsible
        title={titleThree}
        duration={duration}
        typeAnimation={typeAnimation}
        numberOfLines={numberOfLines}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
    </ScrollView>
  );
};

export default CollapsibleExample;
