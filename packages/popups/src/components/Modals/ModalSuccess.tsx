import {rem, useTheme} from '@npm/mobydick-styles';
import React, {FC} from 'react';
import {IButtonTypes} from '@npm/mobydick-cta';

import {ModalBase} from '../ModalBase';
import {IContentProps, IHorizontalButtonsView} from '../../types';

interface IProps extends Partial<IHorizontalButtonsView> {
  title: string;
  descriptionText: string | null;
  buttonText?: string;
  onPressFirst?(): void;
  onPressSecond?(): void;
}

const ModalSuccess: FC<IContentProps & IProps> = props => {
  const {
    onClose,
    title,
    descriptionText,
    buttonText,
    typeLeft,
    onPressLeft,
    textLeft,
    typeRight,
    textRight,
    onPressRight,
    onPressFirst,
    onPressSecond,
  } = props;
  const {colors} = useTheme();

  return (
    <ModalBase overlayStyle={{justifyContent: 'center'}} {...props}>
      <ModalBase.AlertContent
        name={'icon-warning'}
        color={colors.IconAttention}
        style={{backgroundColor: colors.BgError}}
      />
      {title && <ModalBase.Title title={title} />}
      {descriptionText && (
        <ModalBase.DescriptionText descriptionText={descriptionText} />
      )}

      {buttonText && (
        <ModalBase.VerticalButtonsView>
          <ModalBase.VerticalButton
            type={IButtonTypes.tertiary}
            onPress={onClose}
            text={buttonText || 'Ok'}
          />
        </ModalBase.VerticalButtonsView>
      )}

      {textLeft && onPressLeft && textRight && onPressRight ? (
        <ModalBase.HorizontalButtonsView
          typeLeft={typeLeft || IButtonTypes.tertiary}
          textLeft={textLeft}
          onPressLeft={onPressLeft}
          typeRight={typeRight || IButtonTypes.destructive}
          textRight={textRight}
          onPressRight={onPressRight}
        />
      ) : null}

      <ModalBase.VerticalButtonsView>
        <ModalBase.VerticalButton
          onPress={onPressFirst}
          type={IButtonTypes.destructive}
          text={'Удалить'}
          style={{marginBottom: rem(12)}}
        />
        <ModalBase.VerticalButton
          onPress={onPressSecond}
          type={IButtonTypes.tertiary}
          text={'Отменить'}
        />
      </ModalBase.VerticalButtonsView>
    </ModalBase>
  );
};

export default ModalSuccess;
