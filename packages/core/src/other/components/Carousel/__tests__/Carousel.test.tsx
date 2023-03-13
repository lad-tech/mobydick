import {act, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Carousel from '../Carousel';
import {SimpleIcon, SimpleIconName} from '../../../../styles';
import {LABELS} from '../../../constants';
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

describe('Carousel', () => {
  it('render Carousel', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel sideMargin', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          sideMargin={20}
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
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel onPressItem', () => {
    const {toJSON, getAllByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onPressItem={item => console.log(item)}
        />
      </SafeAreaProvider>,
    );
    const onPressItem = getAllByLabelText(LABELS.carouselItem);

    onPressItem[0] && fireEvent.press(onPressItem[0]);
    expect(toJSON()).toMatchSnapshot();
  });

  it('render Carousel activeItemId', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          activeItemId={'6'}
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
  it('render Carousel not activeItemId', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          activeItemId={'20'}
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
  it('render Carousel averageItemLength', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          averageItemLength={6}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
    const carousel = getByLabelText(LABELS.carousel);
    act(() => {
      fireEvent(carousel, 'onScrollToIndexFailed', {
        error: {index: 7},
      });
    });
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
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel animateAutoScroll', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          animateAutoScroll={true}
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
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
    const carousel = getByLabelText(LABELS.carousel);

    fireEvent(carousel, 'onScroll', {
      nativeEvent: {
        contentSize: {height: 600, width: 500},
        contentOffset: {x: 150, y: 0},
        layoutMeasurement: {height: 100, width: 500},
      },
    });
  });
  it('render Carousel onActiveChange', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={(item: IData) => console.log('item', item)}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('render Carousel scroll', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={(item: IData) => console.log('item', item)}
          activeItemId={'3'}
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
  it('render Carousel not scroll', () => {
    const {toJSON, getByLabelText} = render(
      <SafeAreaProvider>
        <Carousel
          data={data}
          sliderItem={sliderItem}
          keyExtractor={keyExtractor}
          onActiveChange={(item: IData) => console.log('item', item)}
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
