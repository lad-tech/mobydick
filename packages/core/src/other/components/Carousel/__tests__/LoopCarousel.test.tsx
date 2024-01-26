import {act, fireEvent, render} from '@testing-library/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {SimpleIcon, SimpleIconName} from '../../../../styles';
import LoopCarousel from '../LoopCarousel';
import {LABELS} from '../../../constants';
import {ICarouselAlign} from '../types';

interface IData {
  name: SimpleIconName;
  id: string;
}
const data: IData[] = [
  {name: 'icon-starfill', id: '0'},
  {name: 'icon-starfill', id: '1'},
  {name: 'icon-starfill', id: '2'},
  {name: 'icon-starfill', id: '3'},
  {name: 'icon-starfill', id: '4'},
  {name: 'icon-starfill', id: '5'},
  {name: 'icon-starfill', id: '6'},
];
const sliderItem = (item: IData) => <SimpleIcon name={item.name} />;
const itemWidth = 100;

describe('LoopCarousel', () => {
  it('render LoopCarousel sideMargin', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <LoopCarousel
          data={data}
          sliderItem={sliderItem}
          sideMargin={20}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render LoopCarousel onPressItem', () => {
    const {toJSON, getAllByLabelText} = render(
      <SafeAreaProvider>
        <LoopCarousel
          data={data}
          sliderItem={sliderItem}
          onPressItem={item => console.log(item)}
          itemWidth={itemWidth}
          loading={false}
        />
      </SafeAreaProvider>,
    );
    const onPressItem = getAllByLabelText(LABELS.carouselItem);
    expect(toJSON()).toMatchSnapshot();
    onPressItem[0] && fireEvent.press(onPressItem[0]);
  });
  it('render LoopCarousel onPressItem loading', () => {
    const {toJSON, getAllByLabelText} = render(
      <SafeAreaProvider>
        <LoopCarousel
          data={data}
          sliderItem={sliderItem}
          onPressItem={item => console.log(item)}
          itemWidth={itemWidth}
          loading={true}
        />
      </SafeAreaProvider>,
    );
    const onPressItem = getAllByLabelText(LABELS.carouselItem);

    onPressItem[0] && fireEvent.press(onPressItem[0]);
    onPressItem[0] && fireEvent.scroll(onPressItem[0]);
    expect(toJSON()).toMatchSnapshot();
  });
  it('render LoopCarousel activeItemId', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <LoopCarousel
          data={data}
          sliderItem={sliderItem}
          activeItemId={'6'}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    const carousel = getByLabelText(LABELS.carousel);

    expect(toJSON()).toMatchSnapshot();
    act(() => {
      fireEvent(carousel, 'layout', {
        nativeEvent: {layout: {height: 100}},
      });
    });
  });
  it('render LoopCarousel initScroll isLoop', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <LoopCarousel
          data={data}
          sliderItem={sliderItem}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    const carousel = getByLabelText(LABELS.carousel);

    expect(toJSON()).toMatchSnapshot();
    act(() => {
      fireEvent(carousel, 'layout', {
        nativeEvent: {layout: {height: 100}},
      });
    });
  });
  it('render LoopCarousel initScroll isLoop align === center', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <LoopCarousel
          data={data}
          sliderItem={sliderItem}
          itemWidth={itemWidth}
          align={ICarouselAlign.center}
        />
      </SafeAreaProvider>,
    );
    const carousel = getByLabelText(LABELS.carousel);

    expect(toJSON()).toMatchSnapshot();
    act(() => {
      fireEvent(carousel, 'layout', {
        nativeEvent: {layout: {height: 100}},
      });
    });
  });
  it('render LoopCarousel contentOffset = 0', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <LoopCarousel
          data={data}
          sliderItem={sliderItem}
          activeItemId={'5'}
          itemWidth={itemWidth}
          align={ICarouselAlign.start}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
    const carousel = getByLabelText(LABELS.carousel);

    fireEvent(carousel, 'onScroll', {
      nativeEvent: {
        contentSize: {height: 600, width: 500},
        contentOffset: {x: 0, y: 0},
        layoutMeasurement: {height: 100, width: 500},
      },
    });
  });
  it('render LoopCarousel contentOffset = contentSize', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <LoopCarousel
          data={data}
          sliderItem={sliderItem}
          activeItemId={'5'}
          itemWidth={itemWidth}
          align={ICarouselAlign.start}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
    const carousel = getByLabelText(LABELS.carousel);

    fireEvent(carousel, 'onScroll', {
      nativeEvent: {
        contentSize: {height: 600, width: 500},
        contentOffset: {x: 100, y: 0},
        layoutMeasurement: {height: 100, width: 500},
      },
    });
  });
  it('render LoopCarousel not index isLoop', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <LoopCarousel
          data={data}
          sliderItem={sliderItem}
          onActiveChange={(item: IData) => console.log('item', item)}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );

    const carousel = getByLabelText(LABELS.carousel);

    act(() => {
      fireEvent(carousel, 'onViewableItemsChanged', {
        viewableItems: [],
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
});
