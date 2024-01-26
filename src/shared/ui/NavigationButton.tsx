import {StyleSheet} from 'react-native';

import {
  IThemeContext,
  TouchableOpacity,
  Typography,
  useStyles,
} from 'shared/ui';

interface INavigationButtonProps {
  text: string;
  onPress: () => void;
}

const NavigationButton = ({onPress, text}: INavigationButtonProps) => {
  const [styles] = useStyles(createStylesFn);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Typography font={'Regular-Primary-H5'}>{text}</Typography>
    </TouchableOpacity>
  );
};

const createStylesFn = ({colors, spaces}: IThemeContext) => {
  return StyleSheet.create({
    container: {
      borderColor: colors.BorderNormal,
      borderWidth: spaces.Space1,
      borderRadius: spaces.Space8,
      padding: spaces.Space8,
      backgroundColor: colors.BgPrimary,
    },
  });
};
export default NavigationButton;
