import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';
import rem from '@npm/mobydick-styles/src/spaces/rem';

const stylesCreate = (theme: IUseStylesTheme) => {
  const {colors} = theme;
  return StyleSheet.create({
    overlay: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: colors.BgOverlay,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    container: {
      backgroundColor: colors.BgSecondary,
      borderRadius: theme.spaces.Space12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: theme.spaces.Space40,
      paddingTop: theme.spaces.Space16,
      marginVertical: theme.spaces.Space20,
      marginHorizontal: theme.spaces.Space6,
    },
    title: {
      fontSize: theme.spaces.Space24,
      lineHeight: rem(26),
      fontWeight: '600',
      color: colors.TextPrimary,
      paddingHorizontal: theme.spaces.Space20,
      paddingVertical: theme.spaces.Space10,
      textAlign: 'center',
    },
    descriptionText: {
      fontSize: rem(16),
      lineHeight: theme.spaces.Space20,
      fontWeight: '400',
      color: colors.TextSecondary,
      paddingHorizontal: theme.spaces.Space20,
      paddingBottom: theme.spaces.Space20,
      textAlign: 'center',
    },
    closeButton: {
      alignSelf: 'flex-end',
      marginRight: theme.spaces.Space16,
      padding: theme.spaces.Space6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.BgTertiary,
      borderRadius: theme.spaces.Space12,
      fill: colors.IconNeutral,
    },
  });
};

export default stylesCreate;
