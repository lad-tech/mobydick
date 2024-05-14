import {
  Button,
  createStyles,
  ModalAsk,
  ModalError,
  ModalLoading,
  ModalSuccess,
  Typography,
  usePopups,
  useStyles,
  View,
} from '@shared/ui';

export const ModalsWidget = () => {
  const [styles] = useStyles(styleFn);
  const {openPopup} = usePopups();

  return (
    <View style={styles.container}>
      <Typography font={'Regular-Primary-H5'}>Modal</Typography>
      <Button
        text={'ModalAsk'}
        onPress={() =>
          openPopup({
            Content: props => (
              <ModalAsk
                title={'ModalAsk'}
                descriptionText={'descriptionText'}
                onPressRight={props.onClose}
                {...props}></ModalAsk>
            ),
          })
        }
      />
      <Button
        text={'ModalLoading'}
        onPress={() =>
          openPopup({
            Content: props => (
              <ModalLoading
                title={'ModalLoading'}
                descriptionText={'descriptionText'}
                {...props}></ModalLoading>
            ),
          })
        }
      />
      <Button
        text={'ModalError'}
        onPress={() =>
          openPopup({
            Content: props => (
              <ModalError
                title={'ModalError'}
                descriptionText={'descriptionText'}
                {...props}></ModalError>
            ),
          })
        }
      />
      <Button
        text={'ModalSuccess'}
        onPress={() =>
          openPopup({
            Content: props => (
              <ModalSuccess
                title={'ModalSuccess'}
                descriptionText={'descriptionText'}
                {...props}></ModalSuccess>
            ),
          })
        }
      />
    </View>
  );
};

const styleFn = createStyles(({spaces}) => ({container: {gap: spaces.Space8}}));
