---
to: <%= path %>/components/<%= name %>/stylesCreate.tsx
---
import {StyleSheet} from 'react-native';
import {IUseStylesTheme} from '@npm/mobydick-styles';

const stylesCreate = (theme: IUseStylesTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.BgPrimary,
    },
  });

export default stylesCreate;
