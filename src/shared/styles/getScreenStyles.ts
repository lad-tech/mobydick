import {createStyles} from '@/shared/ui';

const getScreenStyles = createStyles(({colors, spaces}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.BgPrimary,
    padding: spaces.Space8,
    gap: spaces.Space16,
  },
}));

export default getScreenStyles;
