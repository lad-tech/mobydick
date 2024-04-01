import {
  Button,
  createStyles,
  IButtonTypes,
  ModalBase,
  usePopups,
  useStyles,
  View,
} from 'shared/ui';
import Header from 'shared/ui/Header';

export const ModalWidget = () => {
  const [styles] = useStyles(styleFn);
  const {openPopup} = usePopups();

  return (
    <View style={styles.container}>
      <Header title={'ModalBase'} />
      <Button
        text={'ModalBase'}
        onPress={() =>
          openPopup({
            Content: props => (
              <ModalBase {...props}>
                <ModalBase.CloseIcon onPress={props.onClose} />
                <ModalBase.AlertContent />
                <ModalBase.TextContent
                  title={'ModalBase'}
                  descriptionText={'descriptionText'}
                />
                <ModalBase.VerticalButtonsView>
                  <ModalBase.VerticalButton text={'VerticalButton'} />
                </ModalBase.VerticalButtonsView>
                <ModalBase.HorizontalButtonsView
                  textLeft={'Left btn'}
                  textRight={'Right btn'}
                  typeLeft={IButtonTypes.primary}
                  typeRight={IButtonTypes.destructive}
                  onPressRight={props.onClose}
                  onPressLeft={props.onClose}
                />
              </ModalBase>
            ),
          })
        }
      />
    </View>
  );
};

const styleFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space8,
  },
}));
