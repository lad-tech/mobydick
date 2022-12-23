import React, {FC} from 'react';

import {ModalBase} from '../ModalBase';
import {IContentProps} from '../../types';
import useStyles from '../../../styles/theme/hooks/useStyles';

import stylesCreate from './stylesCreate';
import {IModalProps} from './types';

const ModalSuccess: FC<IContentProps & IModalProps> = props => {
  const {onClose, title, descriptionText, buttonText} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <ModalBase
      overlayStyle={styles.overlayStyle}
      containerStyle={styles.container}
      {...props}>
      <ModalBase.AlertContent />

      <ModalBase.TextContent title={title} descriptionText={descriptionText} />

      <ModalBase.VerticalButtonsView>
        <ModalBase.VerticalButton onPress={onClose} text={buttonText || 'OK'} />
      </ModalBase.VerticalButtonsView>
    </ModalBase>
  );
};

export default ModalSuccess;
