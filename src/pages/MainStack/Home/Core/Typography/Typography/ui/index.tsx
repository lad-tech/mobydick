import {FlatListProps, ListRenderItem} from 'react-native';

import {
  defaultTextLightColor,
  FlatList,
  TFontBodySize,
  TFontColor,
  TFontWeight,
  Typography,
  TypographyLegacyProp,
  TypographyProp,
  useStyles,
  View,
} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';

const getAllTypography = (): TypographyProp[] => {
  const weights: TFontWeight[] = Object.keys(
    TFontWeight,
  ) as unknown as TFontWeight[];

  const sizes: TFontBodySize[] = Object.keys(
    TFontBodySize,
  ) as unknown as TFontBodySize[];
  const colors: TFontColor[] = Object.keys(defaultTextLightColor).map(name =>
    name.slice(4, name.length),
  ) as unknown as TFontColor[];

  const result: TypographyProp[] = [];
  colors.forEach(color => {
    weights.forEach(weight => {
      sizes.forEach(size => {
        result.push(`${weight}-${color}-${size}`);
      });
    });
  });

  return result;
};

const renderItem: ListRenderItem<TypographyProp> = ({item}) => (
  <Typography font={item}>{item}</Typography>
);

const keyExtractor: FlatListProps<TypographyLegacyProp>['keyExtractor'] =
  item => item;
const TypographyScreen = () => {
  const [styles] = useStyles(getScreenStyles);
  const data = getAllTypography();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default TypographyScreen;
