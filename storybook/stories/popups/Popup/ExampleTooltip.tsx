import React, {FC, useRef, useState} from 'react';
import Title from '@npm/mobydick-popups/src/components/TooltipBase/Title';
import DescriptionText from '@npm/mobydick-popups/src/components/TooltipBase/DescriptionText';
import {Button} from '@npm/mobydick-cta';
import {text} from '@storybook/addon-knobs';
import {LayoutChangeEvent, View} from 'react-native';
import Arrow from '@npm/mobydick-popups/src/components/TooltipBase/Arrow';

import {
  ITooltip,
  TooltipBase,
} from '../../../../packages/popups/src/components/TooltipBase';

const ExampleTooltip: FC<ITooltip> = props => {
  const {isVisible, children} = props;
  const [heightChildren, setHeightChildren] = useState(0);
  const [widthChildren, setWidthChildren] = useState(0);
  const ref = useRef<View>(null);
  console.log('ref', ref.current);
  console.log('widthChildren', widthChildren);

  return (
    <View style={{position: 'relative', alignItems: 'center'}}>
      <TooltipBase
        {...props}
        position={{bottom: heightChildren, right: 0}}
        isVisible={isVisible}>
        <Title title={'Title'} />
        <DescriptionText descriptionText={'DescriptionText'} />
        <Arrow />
        <Button onPress={() => null} text={text('Text button', 'Войти')} />
      </TooltipBase>
      <View
        ref={ref}
        onLayout={(event: LayoutChangeEvent) => {
          setHeightChildren(event.nativeEvent.layout.height);
          setWidthChildren(event.nativeEvent.layout.width);
        }}
        style={{backgroundColor: '#ff0000'}}>
        {children}
      </View>
    </View>
  );
};

export default ExampleTooltip;
