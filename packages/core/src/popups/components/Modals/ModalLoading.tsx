import {FC} from 'react';

import {ModalBase} from '../ModalBase';
import {IContentProps} from '../../types';
import useStyles from '../../../styles/hooks/useStyles';
import rem from '../../../styles/utils/rem';
import {ISizeSpinner} from '../../../progress/components/Spinner/types';
import Spinner from '../../../progress/components/Spinner/Spinner';
import {IButtonTypes} from '../../../cta/components/Button/types';

import {IModalProps} from './types';
import stylesCreate from './stylesCreate';

const ModalLoading: FC<IContentProps & IModalProps> = props => {
  const {onClose, title, descriptionText, buttonText} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <ModalBase
      overlayStyle={styles.overlayStyle}
      containerStyle={styles.container}
      {...props}>
      <Spinner size={ISizeSpinner.L} style={{margin: rem(6)}} />
      <ModalBase.TextContent title={title} descriptionText={descriptionText} />

      <ModalBase.VerticalButtonsView>
        <ModalBase.VerticalButton
          type={IButtonTypes.secondary}
          onPress={onClose}
          text={buttonText || 'Отмена'}
        />
      </ModalBase.VerticalButtonsView>
    </ModalBase>
  );
};

export default ModalLoading;
