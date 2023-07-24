import React, {FC, RefObject} from 'react';
import {StyleSheet} from 'react-native';

import {
  IContentProps,
  IPlacement,
  IPosition,
  IThemeContext,
  ITouchableOpacity,
  TooltipBase,
  useStyles,
} from '@lad-tech/mobydick-core';

export enum ITypeTooltip {
  onlyTitle = 'onlyTitle',
  onlyText = 'onlyText',
  textAndButton = 'textAndButton',
}

export interface IExampleTooltipStoryProps {
  placement: IPlacement;
  position: IPosition;
  titleText: string;
  textButton: string;
  descriptionText: string;
  timeShow: number;
  isArrow: boolean;
  viewTooltip: ITypeTooltip;
}
const ExampleTooltip: FC<
  IContentProps & {
    refCurrent: RefObject<ITouchableOpacity>;
    fixedButton: boolean;
  } & IExampleTooltipStoryProps
> = props => {
  const [styles] = useStyles(stylesCreate);

  const {
    position,
    viewTooltip,
    textButton,
    isArrow,
    timeShow,
    descriptionText,
    titleText,
    placement,
  } = props;

  switch (viewTooltip) {
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
          {isArrow ? (
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
          {isArrow ? (
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

          {isArrow ? (
            <TooltipBase.Arrow placement={placement} position={position} />
          ) : null}

          <TooltipBase.LeftButton onPress={undefined} text={textButton} />
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
