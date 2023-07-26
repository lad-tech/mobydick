import React, {FC, useCallback} from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImageModal from '../icons/svg/imageModal.svg';

import {
  IButtonSize,
  IButtonTypes,
  IContentProps,
  ModalBase,
  rem,
  TypographyProp,
  usePopups,
  useTheme,
} from '@lad-tech/mobydick-core';

export const allowAccessText = 'Разрешить доступ';

export interface IExampleModalStoryProps {
  titleFont: TypographyProp;
  descriptionFont: TypographyProp;
  showAlertCheck: boolean;
  showAlertWarning: boolean;
  showImage: boolean;
  showTextContent: boolean;
  titleText: string;
  descriptionText: string;
  showVerticalButton: boolean;
  typeOneVerticalButton: IButtonTypes;
  textOneVerticalButton: string;
  typeTwoVerticalButton: IButtonTypes;
  textTwoVerticalButton: string;
  showHorizontalButton: boolean;
  typeRightButton: IButtonTypes;
  textRightButton: string;
  typeLeftButton: IButtonTypes;
  disabledLeft: boolean;
  disabledRight: boolean;
  textLeftButton: string;
  showOneButton: boolean;
  typeOneButton: IButtonTypes;
  textOneButton: string;
  sizeOneButton: IButtonSize;
}
const ExampleModal: FC<IContentProps & IExampleModalStoryProps> = props => {
  const popupContext = usePopups();
  const {colors} = useTheme();
  const {onClose, ...rest} = props;

  const {
    sizeOneButton,
    textOneButton,
    typeOneButton,
    showOneButton,
    textLeftButton,
    disabledRight,
    disabledLeft,
    typeLeftButton,
    textRightButton,
    typeRightButton,
    showHorizontalButton,
    textOneVerticalButton,
    typeOneVerticalButton,
    textTwoVerticalButton,
    typeTwoVerticalButton,
    titleText,
    descriptionText,
    showVerticalButton,
    showAlertCheck,
    showImage,
    showTextContent,
    showAlertWarning,
    titleFont,
    descriptionFont,
  } = rest;
  const onPress = useCallback(
    () =>
      popupContext.openPopup({
        Content: props => <NestedExampleModal {...rest} {...props} />,
      }),
    [popupContext, rest],
  );
  const onPressVerticalButton = useCallback(
    () =>
      popupContext.openPopup({
        Content: props => <NestedExampleModal {...rest} {...props} />,
      }),
    [popupContext, rest],
  );
  return (
    <ModalBase {...props}>
      <ModalBase.CloseIcon onPress={onClose} />
      {showAlertCheck && <ModalBase.AlertContent />}
      {showAlertWarning && (
        <ModalBase.AlertContent
          name={'icon-warning'}
          color={colors.IconAttention}
          style={{backgroundColor: colors.BgError}}
        />
      )}
      {showImage && <ModalBase.ImageView image={<ImageModal />} />}

      {showTextContent && (
        <ModalBase.TextContent
          title={titleText}
          titleFont={titleFont}
          descriptionText={descriptionText}
          descriptionFont={descriptionFont}
        />
      )}

      {showVerticalButton && (
        <ModalBase.VerticalButtonsView>
          <ModalBase.VerticalButton
            onPress={onPress}
            type={typeOneVerticalButton}
            text={textOneVerticalButton}
            style={{marginBottom: rem(12)}}
          />
          <ModalBase.VerticalButton
            onPress={onPress}
            type={typeTwoVerticalButton}
            text={textTwoVerticalButton}
          />
        </ModalBase.VerticalButtonsView>
      )}
      {showHorizontalButton && (
        <ModalBase.HorizontalButtonsView
          typeRight={typeRightButton}
          textRight={textRightButton}
          onPressRight={onPress}
          typeLeft={typeLeftButton}
          disabledLeft={disabledLeft}
          disabledRight={disabledRight}
          textLeft={textLeftButton}
          onPressLeft={onClose}
        />
      )}
      {showOneButton && (
        <ModalBase.VerticalButtonsView>
          <ModalBase.VerticalButton
            onPress={onPressVerticalButton}
            type={typeOneButton}
            text={textOneButton}
            size={sizeOneButton}
            style={{marginBottom: rem(12)}}
          />
        </ModalBase.VerticalButtonsView>
      )}
    </ModalBase>
  );
};

const NestedExampleModal: FC<
  IContentProps & IExampleModalStoryProps
> = props => {
  const popupContext = usePopups();
  const {onClose, ...rest} = props;

  const {typeOneVerticalButton} = rest;
  const onPress = useCallback(
    () =>
      popupContext.openPopup({
        Content: props => <ExampleModal {...rest} {...props} />,
      }),
    [popupContext, rest],
  );
  return (
    <ModalBase {...props}>
      <ModalBase.CloseIcon onPress={onClose} />
      <ModalBase.TextContent
        title={'Вложенная Модалка'}
        descriptionText={'Это просто пример'}
      />
      <ModalBase.VerticalButtonsView>
        <ModalBase.VerticalButton
          onPress={onPress}
          text={'Открыть ещё одну'}
          type={typeOneVerticalButton}
        />
      </ModalBase.VerticalButtonsView>
    </ModalBase>
  );
};

export default ExampleModal;
