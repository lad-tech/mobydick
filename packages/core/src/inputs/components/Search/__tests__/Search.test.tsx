import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Search from '../Search';
import View from '../../../../basic/components/View/View';
import {LABELS} from '../../../../other';

describe('Search', () => {
  test('render correctly with value', () => {
    const onChangeText = jest.fn();
    const {toJSON, getByLabelText} = render(
      <Search
        value={'value'}
        onChangeText={onChangeText}
        leftIcon={<View />}
      />,
    );
    expect(toJSON()).toMatchSnapshot();

    const cancel = getByLabelText(LABELS.cancelSearch);
    fireEvent.press(cancel);

    expect(onChangeText).toHaveBeenCalledWith('');
  });
  test('render correctly without value', () => {
    const {toJSON, getByLabelText} = render(<Search />);
    expect(toJSON()).toMatchSnapshot();

    const log = jest.spyOn(console, 'log');
    const search = getByLabelText(LABELS.search);

    fireEvent.changeText(search, 'search');

    expect(log).toHaveBeenCalledWith(
      'Search says: "Add onChangeText (╯°□°)╯︵ ┻━┻". Current value=search',
    );
  });
});
