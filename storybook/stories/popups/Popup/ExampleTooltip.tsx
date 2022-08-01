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
import {defaultElementLightColor} from '@npm/mobydick-styles';
const ExampleTooltip: FC<ITooltip> = props => {
  const {isVisible, position, children} = props;

  const isArrow = true;
  const placement = select('Placement', IPlacement, IPlacement.center);

  const colorTooltip = select('Цвет', defaultElementLightColor, '#FAB742');

  return (
    <View style={{position: 'relative', alignItems: 'center'}}>
      <TooltipBase
        {...props}
        position={position}
        isVisible={isVisible}
        placement={placement}
        styleContainer={{backgroundColor: colorTooltip}}>
        <Title
          title={'Войдите в приложение, чтобы\nделиться картами и скидками'}
        />
        <DescriptionText
          descriptionText={'Это займет меньше минуты, а\nплюшек станет больше!'}
        />

        {boolean('With arrow', isArrow) ? (
          <Arrow
            placement={placement}
            position={position}
            colorTooltip={colorTooltip}
          />
        ) : null}
        <Button
          onPress={() => null}
          text={text('Text button', 'Войти')}
          size={ISize.small}
          style={{alignSelf: 'flex-start'}}
        />
      </TooltipBase>
      {children}
    </View>
  );
};

export default ExampleTooltip;
