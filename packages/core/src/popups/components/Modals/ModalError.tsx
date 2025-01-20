import {FC} from 'react';

import {ModalBase} from '../ModalBase';
import {IContentProps} from '../../types';
import {IButtonTypes} from '../../../cta/components/Button/types';
import useTheme from '../../../styles/hooks/useTheme';
import useStyles from '../../../styles/hooks/useStyles';

import stylesCreate from './stylesCreate';
import {IModalProps} from './types';

const ModalError: FC<IContentProps & IModalProps> = props => {
  const {title, descriptionText, buttonText, onClose} = props;
  const {colors} = useTheme();
  const [styles] = useStyles(stylesCreate);

  return (
    <ModalBase
      overlayStyle={styles.overlayStyle}
      containerStyle={styles.container}
      {...props}>
      <ModalBase.AlertContent
        name={'icon-warning'}
        color={colors.IconError}
        style={{backgroundColor: colors.BgError}}
      />

      <ModalBase.TextContent title={title} descriptionText={descriptionText} />
      <ModalBase.VerticalButtonsView>
        <ModalBase.VerticalButton
          type={IButtonTypes.destructive}
          onPress={onClose}
          text={buttonText || 'Ok'}
        />
      </ModalBase.VerticalButtonsView>
    </ModalBase>
  );
};

export default ModalError;
