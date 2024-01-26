import {FC, PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {PopupBase} from '../PopupBase';
import {IPopup} from '../../types';
import {returnTrue} from '../../functions';
import useStyles from '../../../styles/theme/hooks/useStyles';
import View from '../../../basic/components/View/View';

import CloseIcon from './CloseIcon';
import VerticalButtonsView from './VerticalButtonsView';
import HorizontalButtonsView from './HorizontalButtonsView';
import AlertContent from './AlertContent';
import VerticalButton from './VerticalButton';
import ImageView from './ImageView';
import stylesCreate from './stylesCreate';
import TextContent from './TextContent';

const ModalBase: FC<
  PropsWithChildren<
    Omit<IPopup, 'Content'> & {
      overlayStyle?: StyleProp<ViewStyle>;
      onClose: () => void;
      containerStyle?: StyleProp<ViewStyle>;
    }
  >
> & {
  CloseIcon: typeof CloseIcon;
  VerticalButtonsView: typeof VerticalButtonsView;
  HorizontalButtonsView: typeof HorizontalButtonsView;
  VerticalButton: typeof VerticalButton;
  AlertContent: typeof AlertContent;
  ImageView: typeof ImageView;
  TextContent: typeof TextContent;
} = props => {
  const {children, overlayStyle, onClose, containerStyle} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <PopupBase
      onClose={onClose}
      overlayStyle={[styles.overlayStyle, overlayStyle]}>
      <View
        style={[styles.container, containerStyle]}
        onStartShouldSetResponder={returnTrue}>
        {children}
      </View>
    </PopupBase>
  );
};

ModalBase.CloseIcon = CloseIcon;
ModalBase.VerticalButtonsView = VerticalButtonsView;
ModalBase.HorizontalButtonsView = HorizontalButtonsView;
ModalBase.AlertContent = AlertContent;
ModalBase.VerticalButton = VerticalButton;
ModalBase.ImageView = ImageView;
ModalBase.TextContent = TextContent;
export default ModalBase;
