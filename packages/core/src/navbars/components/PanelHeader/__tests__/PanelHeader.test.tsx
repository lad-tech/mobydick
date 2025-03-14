import {act, fireEvent, render} from '@testing-library/react-native';

import {PanelHeader} from '../index';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import {LABELS} from '../../../../other';

describe('Tab', () => {
  test('render panelHeader', () => {
    const {toJSON} = render(
      <PanelHeader
        title={'title'}
        subtitle={'Subtitle'}
        containerStyle={{backgroundColor: '#000'}}
        titleStyle={{flex: 1}}
        subtitleStyle={{flex: 1}}
        titleViewStyle={{flex: 1}}
        rightViewStyle={{flex: 1}}
        leftViewStyle={{flex: 1}}
        commonViewStyle={{flex: 1}}
        leftView={<SimpleIcon name={'icon-calendar'} />}
        rightView={<SimpleIcon name={'icon-calendar'} />}
        titleView={<></>}
        titleFont={'SemiBold-Secondary-L'}
        subtitleFont={'SemiBold-Secondary-M'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  test('render panelHeader without props', () => {
    const {toJSON} = render(<PanelHeader />);

    expect(toJSON()).toMatchSnapshot();
  });
  test('render panelHeader with title', () => {
    const {toJSON} = render(<PanelHeader title={'title'} />);

    expect(toJSON()).toMatchSnapshot();
  });
  test('render panelHeader with subtitle', () => {
    const {toJSON} = render(<PanelHeader subtitle={'Subtitle'} />);

    expect(toJSON()).toMatchSnapshot();
  });
  test('render panelHeader only leftView', () => {
    const {toJSON, getByLabelText} = render(
      <PanelHeader
        title={'title'}
        subtitle={'Subtitle'}
        containerStyle={{backgroundColor: '#000'}}
        titleStyle={{flex: 1}}
        subtitleStyle={{flex: 1}}
        titleViewStyle={{flex: 1}}
        rightViewStyle={{flex: 1}}
        leftViewStyle={{flex: 1}}
        commonViewStyle={{flex: 1}}
        leftView={<SimpleIcon name={'icon-calendar'} />}
        titleView={<></>}
        titleFont={'SemiBold-Secondary-L'}
        subtitleFont={'SemiBold-Secondary-M'}
      />,
    );
    const layout = getByLabelText(LABELS.panelHeaderLeftView);
    expect(toJSON()).toMatchSnapshot();
    act(() => {
      fireEvent(layout, 'layout', {
        nativeEvent: {layout: {width: 100}},
      });
    });
  });
  test('render panelHeader only rightView', () => {
    const {toJSON, getByLabelText} = render(
      <PanelHeader
        title={'title'}
        subtitle={'Subtitle'}
        containerStyle={{backgroundColor: '#000'}}
        titleStyle={{flex: 1}}
        subtitleStyle={{flex: 1}}
        titleViewStyle={{flex: 1}}
        rightViewStyle={{flex: 1}}
        commonViewStyle={{flex: 1}}
        rightView={<SimpleIcon name={'icon-calendar'} />}
        titleView={<></>}
        titleFont={'SemiBold-Secondary-L'}
        subtitleFont={'SemiBold-Secondary-M'}
      />,
    );
    const layout = getByLabelText(LABELS.panelHeaderRightView);
    expect(toJSON()).toMatchSnapshot();
    act(() => {
      fireEvent(layout, 'layout', {
        nativeEvent: {layout: {width: 100}},
      });
    });
  });
  test('render panelHeader isSafeAreaView', () => {
    const {toJSON} = render(
      <PanelHeader
        title={'title'}
        subtitle={'Subtitle'}
        containerStyle={{backgroundColor: '#000'}}
        titleStyle={{flex: 1}}
        subtitleStyle={{flex: 1}}
        titleViewStyle={{flex: 1}}
        rightViewStyle={{flex: 1}}
        leftViewStyle={{flex: 1}}
        commonViewStyle={{flex: 1}}
        leftView={<SimpleIcon name={'icon-calendar'} />}
        rightView={<SimpleIcon name={'icon-calendar'} />}
        titleView={<></>}
        titleFont={'SemiBold-Secondary-L'}
        subtitleFont={'SemiBold-Secondary-M'}
        isSafeAreaView={false}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  test('render panelHeader edges', () => {
    const {toJSON} = render(
      <PanelHeader subtitle={'Subtitle'} edges={['left']} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
