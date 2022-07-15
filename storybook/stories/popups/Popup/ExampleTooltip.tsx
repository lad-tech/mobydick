import React, {FC} from 'react';
import Title from '@npm/mobydick-popups/src/components/TooltipBase/Title';
import DescriptionText from '@npm/mobydick-popups/src/components/TooltipBase/DescriptionText';
import {Button, ISize} from '@npm/mobydick-cta';
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
        <Title
          title={'Войдите в приложение, чтобы\nделиться картами и скидками'}
        />
        <DescriptionText
          descriptionText={'Это займет меньше минуты, а\nплюшек станет больше!'}
        />

        {boolean('With arrow', isArrow) ? (
          <Arrow
            placement={select('Placement', IPlacement, IPlacement.center)}
            position={position}
          />
        ) : null}
        <Button
          onPress={() => null}
          text={text('Text button', 'Войти')}
          size={ISize.small}
        />
      </TooltipBase>
      {children}
    </View>
  );
};

export default ExampleTooltip;
