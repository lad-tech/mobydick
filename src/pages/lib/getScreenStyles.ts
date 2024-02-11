import { StyleSheet } from 'react-native';
import { IThemeContext } from 'shared/ui';


const getScreenStyles =({colors, spaces}: IThemeContext) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BgPrimary,
      padding: spaces.Space8,
      gap: spaces.Space16
    }
  })
}

export default getScreenStyles