import React, {FC} from 'react';
import Title from '@npm/mobydick-popups/src/components/TooltipBase/Title';
import DescriptionText from '@npm/mobydick-popups/src/components/TooltipBase/DescriptionText';
import {Button} from '@npm/mobydick-cta';
import {boolean, select, text} from '@storybook/addon-knobs';
import {View} from 'react-native';
import Arrow from '@npm/mobydick-popups/src/components/TooltipBase/Arrow';
import {
  IPlacement,
  ITooltip,
  TooltipBase,
} from '@npm/mobydick-popups/src/components/TooltipBase';

const ExampleTooltip: FC<ITooltip> = props => {
  const {isVisible, position, children} = props;

  const isArrow = true;

  return (
    <View style={{position: 'relative', alignItems: 'center'}}>
      <TooltipBase {...props} position={position} isVisible={isVisible}>
        <Title title={'Title'} />
        <DescriptionText descriptionText={'DescriptionText'} />

        {boolean('With arrow', isArrow) ? (
          <Arrow
            placement={select('Placement', IPlacement, IPlacement.center)}
            position={position}
          />
        ) : null}
        <Button onPress={() => null} text={text('Text button', 'Войти')} />
      </TooltipBase>
      {children}
    </View>
  );
};

export default ExampleTooltip;
