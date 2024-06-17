import {createStyles, TypographyLegacy, useStyles, View} from '@shared/ui';

export const BlockView = ({
  item,
  width,
  height,
  backgroundColor,
}: {
  item: number;
  width: number;
  height?: number;
  backgroundColor?: string | undefined;
}) => {
  const [styles, {colors}] = useStyles(stylesFn);

  return (
    <View
      style={[
        styles.container,
        {
          width: width,
          height: height || width,
          backgroundColor: backgroundColor || colors.BgAccent,
        },
      ]}>
      <TypographyLegacy>{item}</TypographyLegacy>
    </View>
  );
};

const stylesFn = createStyles(() => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
