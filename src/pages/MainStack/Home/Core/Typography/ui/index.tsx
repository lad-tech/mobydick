import {FlatListProps, ListRenderItem} from 'react-native';

import {
  defaultTextLightColor,
  FlatList,
  TFontColor,
  TFontSize,
  TFontWeight,
  TypographyLegacy,
  TypographyProp,
  useStyles,
  View,
} from '@shared/ui';
import getScreenStyles from '@shared/styles/getScreenStyles';

const getAllTypography = (): TypographyProp[] => {
  const weights: TFontWeight[] = Object.keys(
    TFontWeight,
  ) as unknown as TFontWeight[];

  const sizes: TFontSize[] = Object.keys(TFontSize) as unknown as TFontSize[];
  const colors: TFontColor[] = Object.keys(defaultTextLightColor).map(name =>
    name.slice(4, name.length),
  ) as unknown as TFontColor[];

  const result: TypographyProp[] = [];
  weights.forEach(weight => {
    colors.forEach(color => {
      sizes.forEach(size => {
        result.push(`${weight}-${color}-${size}`);
      });
    });
  });

  return result;
};

const renderItem: ListRenderItem<TypographyProp> = ({item}) => (
  <TypographyLegacy font={item}>{item}</TypographyLegacy>
);

const keyExtractor: FlatListProps<TypographyProp>['keyExtractor'] = item =>
  item;
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
