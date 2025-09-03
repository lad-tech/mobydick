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
} from '@/shared/ui';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

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
  const data = getAllTypography();

  return (
    <SafeAreaContainer>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={true}
      />
    </SafeAreaContainer>
  );
};

export default TypographyScreen;
