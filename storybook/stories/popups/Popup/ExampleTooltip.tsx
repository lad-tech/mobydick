import React, {FC, RefObject} from 'react';
import {Button, IButtonSize} from '@npm/mobydick-cta';
import {boolean, select, text} from '@storybook/addon-knobs';
import {
  IContentProps,
  IPlacement,
  IPosition,
  TooltipBase,
} from '@npm/mobydick-popups';
import {ITouchableOpacity} from '@npm/mobydick-core';
import {IThemeContext, useStyles} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

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
  const [styles] = useStyles(stylesCreate);

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
            titleStyles={styles.titleStyles}
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
            titleStyles={styles.titleStyles}
          />

          <TooltipBase.DescriptionText descriptionText={descriptionText} />

          {boolean('With arrow', isArrow) ? (
            <TooltipBase.Arrow placement={placement} position={position} />
          ) : null}

          <Button
            onPress={() => null}
            text={text('Text button', 'Войти')}
            size={IButtonSize.small}
            style={{alignSelf: 'flex-start', marginVertical: 8}}
          />
        </TooltipBase>
      );
    }
  }
};

const stylesCreate = (theme: IThemeContext) =>
  StyleSheet.create({
    titleStyles: {
      paddingTop: theme.spaces.Space4,
      paddingBottom: theme.spaces.Space8,
    },
  });

export default ExampleTooltip;
