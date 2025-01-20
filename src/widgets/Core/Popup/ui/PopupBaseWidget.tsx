import {
  Button,
  createStyles,
  PopupBase,
  Title,
  usePopups,
  useStyles,
  View,
} from '@/shared/ui';

export const PopupBaseWidget = () => {
  const [styles] = useStyles(styleFn);
  const {openPopup} = usePopups();

  return (
    <View style={styles.container}>
      <Title font={'Primary-H5'}>Popup</Title>
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
