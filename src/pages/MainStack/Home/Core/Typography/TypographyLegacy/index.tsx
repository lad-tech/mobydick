import {FlatListProps, ListRenderItem} from 'react-native';

import {
  defaultTextLightColor,
  FlatList,
  TFontColor,
  TFontSize,
  TFontWeight,
  TypographyLegacy,
  TypographyLegacyProp,
  useStyles,
  View,
} from '@shared/ui';
import getScreenStyles from '@shared/styles/getScreenStyles';

const getAllTypographyLegacy = (): TypographyLegacyProp[] => {
  const weights: TFontWeight[] = Object.keys(
    TFontWeight,
  ) as unknown as TFontWeight[];

  const sizes: TFontSize[] = Object.keys(TFontSize) as unknown as TFontSize[];
  const colors: TFontColor[] = Object.keys(defaultTextLightColor).map(name =>
    name.slice(4, name.length),
  ) as unknown as TFontColor[];

  const result: TypographyLegacyProp[] = [];
  weights.forEach(weight => {
    colors.forEach(color => {
      sizes.forEach(size => {
        result.push(`${weight}-${color}-${size}`);
      });
    });
  });

  return result;
};

const renderItem: ListRenderItem<TypographyLegacyProp> = ({item}) => (
  <TypographyLegacy font={item}>{item}</TypographyLegacy>
);

const keyExtractor: FlatListProps<TypographyLegacyProp>['keyExtractor'] =
  item => item;
const TypographyLegacyScreen = () => {
  const [styles] = useStyles(getScreenStyles);
  const data = getAllTypographyLegacy();

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

export default TypographyLegacyScreen;
