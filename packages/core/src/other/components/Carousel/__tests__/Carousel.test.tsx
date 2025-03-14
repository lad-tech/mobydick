import {act, fireEvent, render} from '@testing-library/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Carousel from '../Carousel';
import {SimpleIcon, SimpleIconName} from '../../../../styles';
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
const keyExtractor = (item: IData) => item.id;
const itemWidth = 100;

describe('Carousel', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useFakeTimers();
  });
  it('render Carousel', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('render Carousel loading', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          loading={true}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('render Carousel onScroll', () => {
    const {toJSON, getAllByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    const onPressItem = getAllByLabelText(LABELS.carouselItem);

    onPressItem[0] && fireEvent.press(onPressItem[0]);
    onPressItem[0] && fireEvent.scroll(onPressItem[0]);
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel activeItemId', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          activeItemId={'6'}
          itemWidth={itemWidth}
          keyExtractor={keyExtractor}
        />
      </SafeAreaProvider>,
    );
    const carousel = getByLabelText(LABELS.carousel);

    act(() => {
      fireEvent(carousel, 'layout', {
        nativeEvent: {layout: {height: 100}},
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel not activeItemId', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          activeItemId={'20'}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    const carousel = getByLabelText(LABELS.carousel);

    act(() => {
      fireEvent(carousel, 'layout', {
        nativeEvent: {layout: {height: 100}},
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel averageItemLength', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          averageItemLength={6}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    const carousel = getByLabelText(LABELS.carousel);
    act(() => {
      fireEvent(carousel, 'onScrollToIndexFailed', {
        error: {index: 7},
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel averageItemLength onScrollToIndexFailed', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          activeItemId={'20'}
          averageItemLength={20}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel onScrollToIndexFailed', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );
    const carousel = getByLabelText(LABELS.carousel);
    act(() => {
      fireEvent(carousel, 'onScrollToIndexFailed', {
        error: {index: 7},
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel animateAutoScroll true', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          animateAutoScroll={true}
          itemWidth={itemWidth}
          align={ICarouselAlign.center}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel isDots', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          isDots={true}
          activeItemId={'5'}
          itemWidth={itemWidth}
          align={ICarouselAlign.start}
        />
      </SafeAreaProvider>,
    );
    const carousel = getByLabelText(LABELS.carousel);

    fireEvent(carousel, 'onScroll', {
      nativeEvent: {
        contentSize: {height: 600, width: 500},
        contentOffset: {x: 150, y: 0},
        layoutMeasurement: {height: 100, width: 500},
      },
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel isDots with props', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          isDots={true}
          activeItemId={'1'}
          itemWidth={itemWidth}
          align={ICarouselAlign.start}
          dotSize={4}
          activeDotColor={'red'}
          passiveDotColor={'black'}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel onActiveChange', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={(item: IData) => console.log('item', item)}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel scroll', () => {
    const onActiveChange = jest.fn();
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={onActiveChange}
          activeItemId={'3'}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );

    const carousel = getByLabelText(LABELS.carousel);

    act(() => {
      fireEvent(carousel, 'onViewableItemsChanged', {
        viewableItems: [
          {
            index: 7,
            isViewable: true,
            item: {name: 'icon-starfill', id: '7'},
            key: '7',
          },
        ],
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel scroll align = center', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={(item: IData) => console.log('item', item)}
          activeItemId={'3'}
          itemWidth={itemWidth}
          align={ICarouselAlign.center}
        />
      </SafeAreaProvider>,
    );

    const carousel = getByLabelText(LABELS.carousel);

    act(() => {
      fireEvent(carousel, 'onViewableItemsChanged', {
        viewableItems: [
          {
            index: 0,
            isViewable: true,
            item: {name: 'icon-starfill', id: '0'},
            key: '0',
          },
        ],
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel scroll align = center honest', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={(item: IData) => console.log('item', item)}
          activeItemId={'6'}
          itemWidth={itemWidth}
          align={ICarouselAlign.center}
        />
      </SafeAreaProvider>,
    );

    const carousel = getByLabelText(LABELS.carousel);

    act(() => {
      fireEvent(carousel, 'onViewableItemsChanged', {
        viewableItems: [
          {
            index: 0,
            isViewable: true,
            item: {name: 'icon-starfill', id: '0'},
            key: '0',
          },
        ],
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel scroll align = center honest count', () => {
    const onActiveChange = jest.fn();
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={onActiveChange}
          activeItemId={'6'}
          itemWidth={250}
          align={ICarouselAlign.center}
        />
      </SafeAreaProvider>,
    );

    const carousel = getByLabelText(LABELS.carousel);

    act(() => {
      fireEvent(carousel, 'onViewableItemsChanged', {
        viewableItems: [
          {
            index: 5,
            isViewable: true,
            item: {name: 'icon-starfill', id: '5'},
            key: '5',
          },
          {
            index: 6,
            isViewable: true,
            item: {name: 'icon-starfill', id: '6'},
            key: '6',
          },
        ],
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel scroll align = center count', () => {
    const onActiveChange = jest.fn();
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={onActiveChange}
          activeItemId={'5'}
          itemWidth={itemWidth}
          align={ICarouselAlign.center}
        />
      </SafeAreaProvider>,
    );

    const carousel = getByLabelText(LABELS.carousel);

    act(() => {
      fireEvent(carousel, 'onViewableItemsChanged', {
        viewableItems: [
          {
            index: 4,
            isViewable: true,
            item: {name: 'icon-starfill', id: '4'},
            key: '4',
          },
          {
            index: 5,
            isViewable: true,
            item: {name: 'icon-starfill', id: '5'},
            key: '5',
          },
          {
            index: 6,
            isViewable: true,
            item: {name: 'icon-starfill', id: '6'},
            key: '6',
          },
        ],
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel not scroll', () => {
    const onActiveChange = jest.fn();
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={onActiveChange}
          itemWidth={itemWidth}
        />
      </SafeAreaProvider>,
    );

    const carousel = getByLabelText(LABELS.carousel);

    act(() => {
      fireEvent(carousel, 'onViewableItemsChanged', {
        viewableItems: [
          {
            index: 15,
            isViewable: true,
            item: {name: 'icon-starfill', id: '15'},
            key: '15',
          },
        ],
      });
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel not index', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
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
  it('render Carousel autoScroll', () => {
    jest.useFakeTimers();
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          itemWidth={itemWidth}
          isScrolling={true}
          ms={1000}
        />
      </SafeAreaProvider>,
    );

    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(toJSON()).toMatchSnapshot();
  });
});
