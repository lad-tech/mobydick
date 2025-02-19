import {
  Button,
  createStyles,
  IPosition,
  SnackbarBase,
  Title,
  usePopups,
  useStyles,
  View,
} from '@/shared/ui';

export const SnackbarWidget = () => {
  const [styles] = useStyles(styleFn);
  const {openPopup} = usePopups();
  return (
    <View style={styles.container}>
      <Title font={'Primary-H5'}>Snackbar</Title>
      <Button
        text={'Snackbar top'}
        onPress={() =>
          openPopup({
            Content: props => (
              <SnackbarBase {...props} position={IPosition.top}>
                <SnackbarBase.Title title={'Snackbar top title'} />
              </SnackbarBase>
            ),
          })
        }
      />
      <Button
        text={'Snackbar bottom'}
        onPress={() =>
          openPopup({
            Content: props => (
              <SnackbarBase {...props} position={IPosition.bottom}>
                <SnackbarBase.Title title={'Snackbar bottom title'} />
              </SnackbarBase>
            ),
          })
        }
      />
    </View>
  );
};

const styleFn = createStyles(({spaces}) => ({container: {gap: spaces.Space8}}));
