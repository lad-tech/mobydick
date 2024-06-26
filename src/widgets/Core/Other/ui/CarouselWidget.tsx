import {
  AutoCarousel,
  AutoLoopCarousel,
  Carousel,
  createStyles,
  LoopCarousel,
  px,
  TypographyLegacy,
  useStyles,
  View,
} from '@shared/ui';
import Header from '@shared/ui/Header';
import {BlockView} from '@shared/ui/BlockView';

const data: number[] = [1, 2, 3];
const ITEM_WIDTH = px(200);

export const CarouselWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <View style={styles.container}>
      <Header title={'Carousel'} />
      <TypographyLegacy>Carousel</TypographyLegacy>
      <Carousel
        data={data}
        sliderItem={item => <BlockView item={item} width={ITEM_WIDTH} />}
        itemWidth={ITEM_WIDTH}
        sideMargin={2}
        keyExtractor={item => item.toString()}
      />
      <TypographyLegacy>LoopCarousel</TypographyLegacy>
      <LoopCarousel
        data={data}
        sliderItem={item => <BlockView item={item} width={ITEM_WIDTH} />}
        itemWidth={ITEM_WIDTH}
        sideMargin={2}
      />
      <TypographyLegacy>AutoCarousel</TypographyLegacy>
      <AutoCarousel
        data={data}
        sliderItem={item => <BlockView item={item} width={ITEM_WIDTH} />}
        itemWidth={ITEM_WIDTH}
        sideMargin={2}
        keyExtractor={item => item.toString()}
      />
      <TypographyLegacy>AutoLoopCarousel</TypographyLegacy>
      <AutoLoopCarousel
        data={data}
        sliderItem={item => <BlockView item={item} width={ITEM_WIDTH} />}
        itemWidth={ITEM_WIDTH}
        sideMargin={2}
      />
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space16,
  },
}));
