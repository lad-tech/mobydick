import {act, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Carousel from '../Carousel';
import {SimpleIcon, SimpleIconName} from '../../../../styles';
import {LABELS} from '../../../constants';
interface IInterface {
  name: SimpleIconName;
  id: string;
}
const data: IInterface[] = [
  {name: 'icon-star', id: '1'},
  {name: 'icon-star', id: '2'},
  {name: 'icon-star', id: '3'},
  {name: 'icon-star', id: '4'},
  {name: 'icon-star', id: '5'},
  {name: 'icon-star', id: '6'},
];
const sliderItem = (item: IInterface) => <SimpleIcon name={item.name} />;
const keyExtractor = (item: IInterface) => item.id;

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
    const layout = getByLabelText(LABELS.carousel);

    expect(toJSON()).toMatchSnapshot();
    act(() => {
      fireEvent(layout, 'layout', {
        nativeEvent: {layout: {height: 100}},
      });
    });
  });
  it('render Carousel averageItemLength', () => {
    const {toJSON} = render(
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
});
