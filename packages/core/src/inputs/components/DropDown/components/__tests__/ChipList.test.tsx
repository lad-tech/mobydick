import {fireEvent, render} from '@testing-library/react-native';

import ChipList from '../ChipList';

describe('@lad-tech/mobydick-core/ChipList', () => {
  it('renders correctly and onChange fired', () => {
    const mockedOnChange = jest.fn();
    const {toJSON, getByLabelText} = render(
      <ChipList
        selectedItem={[
          {label: 'JavaScript', value: 1},
          {label: 'Rust', value: 2},
        ]}
        onChange={mockedOnChange}
      />,
    );

    fireEvent.press(getByLabelText('Rust'));

    expect(mockedOnChange).toHaveBeenCalledWith({label: 'Rust', value: 2});
    expect(toJSON()).toMatchSnapshot();
  });
});
