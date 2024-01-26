import {render} from '@testing-library/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AutoLoopCarousel from '../AutoLoopCarousel';
import {SimpleIcon, SimpleIconName} from '../../../../styles';

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

describe('AutoLoopCarousel', () => {
  it('render AutoCarousel', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <AutoLoopCarousel
          data={data}
          sliderItem={sliderItem}
          sideMargin={20}
          itemWidth={itemWidth}
          isScrolling={true}
        />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
