import {render} from '@testing-library/react-native';
import React from 'react';

import {PanelHeader} from '../index';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';

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
});
