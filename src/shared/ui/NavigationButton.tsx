import {
  createStyles,
  TouchableOpacity,
  Typography,
  useStyles,
} from '@/shared/ui';

interface INavigationButtonProps {
  text: string;
  onPress: () => void;
}

const NavigationButton = ({onPress, text}: INavigationButtonProps) => {
  const [styles] = useStyles(createStylesFn);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Typography font={'Regular-Primary-L'}>{text}</Typography>
    </TouchableOpacity>
  );
};

const createStylesFn = createStyles(({spaces, colors}) => ({
  container: {
    borderColor: colors.BorderNormal,
    borderWidth: spaces.Space1,
    borderRadius: spaces.Space8,
    padding: spaces.Space8,
    backgroundColor: colors.BgPrimary,
  },
}));

export default NavigationButton;
