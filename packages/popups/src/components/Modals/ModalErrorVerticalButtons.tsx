import {rem, useTheme} from '@npm/mobydick-styles';
import React, {FC} from 'react';
import {IButtonTypes} from '@npm/mobydick-cta';

import {ModalBase} from '../ModalBase';
import {IContentProps} from '../../types';

interface IProps {
  title?: string;
  descriptionText?: string | null;
  onPressFirst?(): void;
  onPressSecond?(): void;
}

const ModalErrorVerticalButtons: FC<IContentProps & IProps> = props => {
  const {title, descriptionText, onPressFirst, onPressSecond} = props;
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

export default ModalErrorVerticalButtons;
