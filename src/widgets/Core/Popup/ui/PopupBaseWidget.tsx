import {
  Button,
  createStyles,
  PopupBase,
  Typography,
  usePopups,
  useStyles,
  View,
} from 'shared/ui';

export const PopupBaseWidget = () => {
  const [styles] = useStyles(styleFn);
  const {openPopup} = usePopups();

  return (
    <View style={styles.container}>
      <Typography font={'Regular-Primary-H5'}>Popup</Typography>
      <Button
        text={'PopupBase'}
        onPress={() =>
          openPopup({
            Content: props => <PopupBase {...props} />,
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
