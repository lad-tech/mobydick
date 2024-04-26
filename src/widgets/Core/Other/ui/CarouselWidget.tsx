import {
  AutoCarousel,
  AutoLoopCarousel,
  Carousel,
  createStyles,
  LoopCarousel,
  rem,
  Typography,
  useStyles,
  View,
} from '@shared/ui';
import Header from '@shared/ui/Header';
import {BlockView} from '@shared/ui/BlockView';

const data: number[] = [1, 2, 3, 4, 5, 6];
const ITEM_WIDTH = rem(80);

export const CarouselWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <View style={styles.container}>
      <Header title={'Carousel'} />
      <Typography>Carousel</Typography>
      <Carousel
        data={data}
        sliderItem={item => <BlockView item={item} width={ITEM_WIDTH} />}
        itemWidth={ITEM_WIDTH}
        sideMargin={2}
        keyExtractor={item => item.toString()}
      />
      <Typography>LoopCarousel</Typography>
      <LoopCarousel
        data={data}
        sliderItem={item => <BlockView item={item} width={ITEM_WIDTH} />}
        itemWidth={ITEM_WIDTH}
        sideMargin={2}
      />
      <Typography>AutoCarousel</Typography>
      <AutoCarousel
        data={data}
        sliderItem={item => <BlockView item={item} width={ITEM_WIDTH} />}
        itemWidth={ITEM_WIDTH}
        sideMargin={2}
        keyExtractor={item => item.toString()}
      />
      <Typography>AutoLoopCarousel</Typography>
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
