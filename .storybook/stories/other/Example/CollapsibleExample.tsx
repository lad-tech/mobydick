import React from 'react';
import {LayoutAnimationProperty, LayoutAnimationType} from 'react-native';

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
const CollapsibleExample = ({
  duration,
  typeAnimation,
  creationPropAnimation,
  titleOne,
  titleTwo,
  titleThree,
  numberOfLines,
  isAnimated,
}: {
  duration: number;
  typeAnimation: LayoutAnimationType;
  creationPropAnimation: LayoutAnimationProperty;
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  numberOfLines: number;
  isAnimated: boolean;
}) => {
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
