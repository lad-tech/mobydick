import {
  Button,
  createStyles,
  ModalCalendar,
  usePopups,
  useStyles,
  View,
} from '@/shared/ui';
import Header from '@/shared/ui/Header';

export const ModalCalendarWidget = () => {
  const [styles] = useStyles(stylesFn);
  const {openPopup} = usePopups();

  return (
    <View style={styles.container}>
      <Header title={'ModalCalendar'} />
      <Button
        text={'ModalCalendar'}
        onPress={() =>
          openPopup({
            Content: props => <ModalCalendar {...props} />,
          })
        }
      />
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space16,
    alignItems: 'center',
  },
}));
