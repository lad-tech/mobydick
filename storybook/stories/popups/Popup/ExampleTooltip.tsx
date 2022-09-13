import React, {FC} from 'react';
import {Button, ISize} from '@npm/mobydick-cta';
import {boolean, select, text} from '@storybook/addon-knobs';
import {defaultElementLightColor} from '@npm/mobydick-styles';
import {
  IContentProps,
  IPlacement,
  IPosition,
  TooltipBase,
} from '@npm/mobydick-popups';

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
      <TooltipBase.Title
        title={'Войдите в приложение, чтобы\nделиться картами и скидками'}
      />
      <TooltipBase.DescriptionText
        descriptionText={'Это займет меньше минуты, а\nплюшек станет больше!'}
      />

      {boolean('With arrow', isArrow) ? (
        <TooltipBase.Arrow
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
