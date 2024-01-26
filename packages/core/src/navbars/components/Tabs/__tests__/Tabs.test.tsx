import {render} from '@testing-library/react-native';

import Tabs from '../Tabs';

describe('Tabs', () => {
  const list = [{label: '1', value: 1}];
  const onPress = () => null;

  test('render correctly', () => {
    const {toJSON} = render(<Tabs list={list} activeValue={'1'} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render correctly with props', () => {
    const {toJSON} = render(
      <Tabs
        list={list}
        activeValue={'1'}
        onPressCommon={onPress}
        backgroundColorTab={'#000'}
        backgroundColorActiveTab={'#ff0000'}
        contentContainerStyle={{flex: 1}}
        containerStyle={{flex: 2}}
        fontTab={'Regular-Error-H3'}
        fontActiveTab={'Regular-White-H3'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
