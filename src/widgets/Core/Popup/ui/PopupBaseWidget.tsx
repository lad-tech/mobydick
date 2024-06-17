import {
  Button,
  createStyles,
  PopupBase,
  TypographyLegacy,
  usePopups,
  useStyles,
  View,
} from '@shared/ui';

export const PopupBaseWidget = () => {
  const [styles] = useStyles(styleFn);
  const {openPopup} = usePopups();

  return (
    <View style={styles.container}>
      <TypographyLegacy font={'Regular-Primary-H5'}>Popup</TypographyLegacy>
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
