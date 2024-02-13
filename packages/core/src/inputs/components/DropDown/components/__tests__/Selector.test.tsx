import {render, fireEvent} from '@testing-library/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Selector from '../Selector';
import * as getDropDownDimensions from '../../utils/getDropDownDimensions';

describe('@lad-tech/mobydick-core/Selector', () => {
  const list = [{label: 'list', value: 'list'}];
  const renderItemOnPress = jest.fn();
  const largeList = [
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
    {label: '1', value: '1'},
  ];

  const selectedItem = list[0]?.value;

  it('renders correctly', async () => {
    const inputList = [{label: 'list', value: 'list'}] as const;
    const {toJSON, findByLabelText} = render(
      <SafeAreaProvider>
        <Selector
          list={[...inputList]}
          selectedItem={list[1]?.value}
          onClose={jest.fn()}
          pageY={1}
          renderItemOnPress={renderItemOnPress}
          dropDownHeight={80}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();

    const item = await findByLabelText(inputList[0].label);
    fireEvent.press(item);

    expect(renderItemOnPress).toHaveBeenCalledWith(inputList[0]);
  });
  it('renders correctly with bottom padding largeList', async () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Selector
          list={largeList}
          onClose={jest.fn()}
          pageY={1}
          selectedItem={largeList[1]?.value}
          renderItemOnPress={renderItemOnPress}
          dropDownHeight={80}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('render correct renderItem TouchableHighlight with custom style', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Selector
          list={list}
          onClose={jest.fn()}
          pageY={1}
          renderItemOnPress={renderItemOnPress}
          flatListItemStyle={{height: 10}}
          selectedItem={selectedItem}
          selectedItemColor={'red'}
          dropDownHeight={80}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('render correct renderItem Typography with custom style', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Selector
          list={list}
          selectedItem={selectedItem}
          onClose={jest.fn()}
          pageY={1}
          renderItemOnPress={renderItemOnPress}
          flatListTextStylePressed={{backgroundColor: 'red'}}
          dropDownHeight={80}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('render correct renderItem Typography  with custom font', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Selector
          list={list}
          onClose={jest.fn()}
          pageY={1}
          renderItemOnPress={renderItemOnPress}
          selectedItem={selectedItem}
          flatListTextFontPressed={'Bold-Error-L'}
          dropDownHeight={80}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('How props Selector affect getDropDownDimensions', () => {
    const spy = jest.spyOn(getDropDownDimensions, 'getDropDownDimensions');
    render(
      <SafeAreaProvider>
        <Selector
          list={list}
          onClose={jest.fn()}
          pageY={1}
          renderItemOnPress={renderItemOnPress}
          selectedItem={selectedItem}
          flatListStyle={{paddingVertical: 2}}
          dropDownHeight={72}
        />
      </SafeAreaProvider>,
    );

    expect(spy).toHaveBeenLastCalledWith({
      dropDownBorderWidth: 1.5,
      dropDownHeight: 72,
      height: 640,
      navBarHeight: 50,
      pageY: 1,
      listLength: 1,
    });
  });

  it('Selector custom flatList styles', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <Selector
          list={list}
          onClose={jest.fn()}
          pageY={1}
          renderItemOnPress={renderItemOnPress}
          selectedItem={selectedItem}
          flatListStyle={{width: 2}}
          buttonStyle={{borderWidth: 1}}
          dropDownHeight={72}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Selector custom with array in selectedItem', () => {
    const data = [
      {label: 'JavaScript', value: 1},
      {label: 'Rust', value: 2},
    ];

    const {toJSON} = render(
      <SafeAreaProvider>
        <Selector
          list={data}
          onClose={jest.fn()}
          pageY={1}
          renderItemOnPress={renderItemOnPress}
          selectedItem={[data[0]!]}
          dropDownHeight={72}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Selector custom with empty array in selectedItem', () => {
    const data = [
      {label: 'JavaScript', value: 1},
      {label: 'Rust', value: 2},
    ];

    const {toJSON} = render(
      <SafeAreaProvider>
        <Selector
          list={data}
          onClose={jest.fn()}
          pageY={1}
          renderItemOnPress={renderItemOnPress}
          selectedItem={[]}
          dropDownHeight={72}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
