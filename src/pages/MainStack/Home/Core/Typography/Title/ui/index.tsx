import {FlatListProps, ListRenderItem} from 'react-native';

import {
  defaultTextLightColor,
  FlatList,
  TFontColor,
  TFontHeaderSize,
  Title,
  TitleProp,
  TypographyLegacyProp,
  useStyles,
  View,
} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';

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
  const [styles] = useStyles(getScreenStyles);
  const data = getAllTitle();

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

export default TitleScreen;
