import React, {FC, RefObject} from 'react';
import {Button, ISize} from '@npm/mobydick-cta';
import {boolean, select, text} from '@storybook/addon-knobs';
import {
  IContentProps,
  IPlacement,
  IPosition,
  TooltipBase,
} from '@npm/mobydick-popups';
import {ITouchableOpacity} from '@npm/mobydick-core';

enum ITypeTooltip {
  onlyTitle = 'onlyTitle',
  onlyText = 'onlyText',
  textAndButton = 'textAndButton',
}

const ExampleTooltip: FC<
  IContentProps & {
    refCurrent: RefObject<ITouchableOpacity>;
  }
> = props => {
  const isArrow = true;
  const placement = select('Placement', IPlacement, IPlacement.center);
  const position = select('Position', IPosition, IPosition.bottom);
  const titleText = text(
    'Title text',
    'Войдите в приложение, чтобы\nделиться картами и скидками',
  );
  const descriptionText = text(
    'Description text',
    'Это займет меньше минуты, а\nплюшек станет больше!',
  );

  switch (select('View tooltip', ITypeTooltip, ITypeTooltip.onlyTitle)) {
    case ITypeTooltip.onlyTitle: {
      return (
        <TooltipBase
          {...props}
          onClose={props.onClose}
          position={position}
          placement={placement}
          overlayStyle={props.overlayStyle}>
          <TooltipBase.Title title={titleText} />
          {boolean('With arrow', isArrow) ? (
            <TooltipBase.Arrow placement={placement} position={position} />
          ) : null}
        </TooltipBase>
      );
    }
    case ITypeTooltip.onlyText: {
      return (
        <TooltipBase
          {...props}
          onClose={props.onClose}
          position={position}
          placement={placement}
          overlayStyle={props.overlayStyle}>
          <TooltipBase.Title
            title={titleText}
            titleStyles={[
              {
                paddingTop: 4,
                paddingBottom: 8,
              },
            ]}
          />
          <TooltipBase.DescriptionText descriptionText={descriptionText} />
          {boolean('With arrow', isArrow) ? (
            <TooltipBase.Arrow placement={placement} position={position} />
          ) : null}
        </TooltipBase>
      );
    }
    case ITypeTooltip.textAndButton:
    default: {
      return (
        <TooltipBase
          {...props}
          onClose={props.onClose}
          position={position}
          placement={placement}
          overlayStyle={props.overlayStyle}>
          <TooltipBase.Title
            title={titleText}
            titleStyles={{
              paddingTop: 4,
              paddingBottom: 8,
            }}
          />

          <TooltipBase.DescriptionText descriptionText={descriptionText} />

          {boolean('With arrow', isArrow) ? (
            <TooltipBase.Arrow placement={placement} position={position} />
          ) : null}

          <Button
            onPress={() => null}
            text={text('Text button', 'Войти')}
            size={ISize.small}
            style={{alignSelf: 'flex-start', marginVertical: 8}}
          />
        </TooltipBase>
      );
    }
  }
};

export default ExampleTooltip;
