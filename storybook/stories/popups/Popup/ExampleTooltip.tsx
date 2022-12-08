import React, {FC, RefObject} from 'react';
import {boolean, number, select, text} from '@storybook/addon-knobs';
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
    fixedButton: boolean;
  }
> = props => {
  const [styles] = useStyles(stylesCreate);

  const isArrow = true;
  const placement = props.fixedButton
    ? select('Placement', IPlacement, IPlacement.start)
    : select('Placement', [IPlacement.start, IPlacement.end], IPlacement.start);
  const position = select('Position', IPosition, IPosition.top);
  const titleText = text(
    'Title text',
    'Войдите в приложение, чтобы\nделиться картами и скидками',
  );
  const descriptionText = text(
    'Description text',
    'Это займет меньше минуты, а\nплюшек станет больше!',
  );
  const timeShow = number('Timeshow, ms', 0);

  switch (select('View tooltip', ITypeTooltip, ITypeTooltip.onlyTitle)) {
    case ITypeTooltip.onlyTitle: {
      return (
        <TooltipBase
          {...props}
          onClose={props.onClose}
          position={position}
          placement={placement}
          timeShow={timeShow}
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
          timeShow={timeShow}
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
          timeShow={timeShow}
          overlayStyle={props.overlayStyle}>
          <TooltipBase.Title
            title={titleText}
            titleStyles={styles.titleStyles}
          />

          <TooltipBase.DescriptionText descriptionText={descriptionText} />

          {boolean('With arrow', isArrow) ? (
            <TooltipBase.Arrow placement={placement} position={position} />
          ) : null}

          <TooltipBase.LeftButton
            onPress={() => null}
            text={text('Text button', 'Войти')}
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
