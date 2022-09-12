import React, {FC} from 'react';
import Title from '@npm/mobydick-popups/src/components/TooltipBase/Title';
import DescriptionText from '@npm/mobydick-popups/src/components/TooltipBase/DescriptionText';
import {Button, ISize} from '@npm/mobydick-cta';
import {boolean, select, text} from '@storybook/addon-knobs';
import Arrow from '@npm/mobydick-popups/src/components/TooltipBase/Arrow';
import {
  IPlacement,
  IPosition,
  TooltipBase,
} from '@npm/mobydick-popups/src/components/TooltipBase';
import {defaultElementLightColor} from '@npm/mobydick-styles';
import {IContentProps} from '@npm/mobydick-popups';

const ExampleTooltip: FC<
  IContentProps & {
    pageY: number;
  }
> = props => {
  const isArrow = true;
  const placement = select('Placement', IPlacement, IPlacement.center);
  const position = select('Position', IPosition, IPosition.bottom);
  const colorTooltip = select('Цвет', defaultElementLightColor, '#FAB742');

  return (
    <TooltipBase
      {...props}
      onClose={props.onClose}
      position={position}
      placement={placement}
      overlayStyle={props.overlayStyle}
      containerStyle={{backgroundColor: colorTooltip}}>
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
  );
};

export default ExampleTooltip;
