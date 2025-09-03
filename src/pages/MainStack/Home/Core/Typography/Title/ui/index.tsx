import {FlatListProps, ListRenderItem} from 'react-native';

import {
  defaultTextLightColor,
  FlatList,
  TFontColor,
  TFontHeaderSize,
  Title,
  TitleProp,
  TypographyLegacyProp,
} from '@/shared/ui';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const getAllTitle = (): TitleProp[] => {
  const sizes: TFontHeaderSize[] = Object.keys(
    TFontHeaderSize,
  ) as unknown as TFontHeaderSize[];
  const colors: TFontColor[] = Object.keys(defaultTextLightColor).map(name =>
    name.slice(4, name.length),
  ) as unknown as TFontColor[];

  const result: TitleProp[] = [];
  colors.forEach(color => {
    sizes.forEach(size => {
      result.push(`${color}-${size}`);
    });
  });

  return result;
};

const renderItem: ListRenderItem<TitleProp> = ({item}) => (
  <Title font={item}>{item}</Title>
);

const keyExtractor: FlatListProps<TypographyLegacyProp>['keyExtractor'] =
  item => item;
const TitleScreen = () => {
  const data = getAllTitle();

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

export default TitleScreen;
