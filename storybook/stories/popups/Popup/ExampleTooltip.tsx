import React, {FC, RefObject} from 'react';
import {Button, ISize} from '@npm/mobydick-cta';
import {boolean, select, text} from '@storybook/addon-knobs';
import {defaultElementLightColor} from '@npm/mobydick-styles';
import {
  IContentProps,
  IPlacement,
  IPosition,
  TooltipBase,
} from '@npm/mobydick-popups';
import {ITouchableOpacity} from '@npm/mobydick-core';

const ExampleTooltip: FC<
  IContentProps & {
    refCurrent: RefObject<ITouchableOpacity>;
  }
> = props => {
  const isArrow = true;
  const isButton = true;
  const isDescriptionText = true;
  const placement = select('Placement', IPlacement, IPlacement.center);
  const position = select('Position', IPosition, IPosition.bottom);
  const colorTooltip = select('Цвет', defaultElementLightColor, '#FFF');

  return (
    <TooltipBase
      {...props}
      onClose={props.onClose}
      position={position}
      placement={placement}
      overlayStyle={props.overlayStyle}
      containerStyle={{backgroundColor: colorTooltip}}>
      <TooltipBase.Title
        title={text(
          'Title text',
          'Войдите в приложение, чтобы\nделиться картами и скидками',
        )}
        titleStyles={[
          isDescriptionText && isButton
            ? {
                paddingTop: 0,
                paddingBottom: 0,
              }
            : {},
        ]}
      />
      {boolean('With description text', isDescriptionText) ? (
        <TooltipBase.DescriptionText
          descriptionText={text(
            'Description text',
            'Это займет меньше минуты, а\nплюшек станет больше!',
          )}
        />
      ) : null}

      {boolean('With arrow', isArrow) ? (
        <TooltipBase.Arrow
          placement={placement}
          position={position}
          colorTooltip={colorTooltip}
        />
      ) : null}
      {boolean('With button', isButton) ? (
        <Button
          onPress={() => null}
          text={text('Text button', 'Войти')}
          size={ISize.small}
          style={{alignSelf: 'flex-start', paddingVertical: 8}}
        />
      ) : null}
    </TooltipBase>
  );
};

export default ExampleTooltip;
