import React from 'react';
import {boolean, number, select, text} from '@storybook/addon-knobs';

import {
  Collapsible,
  ScrollView,
  Typography,
  View,
} from '@lad-tech/mobydick-core';

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
  const isAnimated = boolean('isAnimated', true);

  return (
    <ScrollView style={{width: '100%'}}>
      <Collapsible
        title={titleOne}
        duration={duration}
        typeAnimation={typeAnimation}
        numberOfLines={numberOfLines}
        isAnimated={isAnimated}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
      <Collapsible
        title={titleTwo}
        duration={duration}
        typeAnimation={typeAnimation}
        numberOfLines={numberOfLines}
        isAnimated={isAnimated}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
      <Collapsible
        title={titleThree}
        duration={duration}
        typeAnimation={typeAnimation}
        numberOfLines={numberOfLines}
        initialState={true}
        isAnimated={isAnimated}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
      <Collapsible
        title={titleTwo}
        duration={duration}
        titleBottomView={
          <Typography font={'Medium-Muted-XS'}>{'Еще один title'}</Typography>
        }
        typeAnimation={typeAnimation}
        numberOfLines={numberOfLines}
        isAnimated={isAnimated}
        creationPropAnimation={creationPropAnimation}>
        <ChildrenView />
      </Collapsible>
    </ScrollView>
  );
};

export default CollapsibleExample;
