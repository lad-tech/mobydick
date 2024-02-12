import {fireEvent, render} from '@testing-library/react-native';

import Chip from '../Chip';

describe('@lad-tech/mobydick-core/Chip', () => {
  it('renders correctly and onPress fired', () => {
    const mockedOnPress = jest.fn();
    const {toJSON, getByLabelText} = render(
      <Chip text={'JavaScript'} onPress={mockedOnPress} />,
    );

    fireEvent.press(getByLabelText('JavaScript'));

    expect(mockedOnPress).toHaveBeenCalled();
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with maxTextLength', () => {
    const {toJSON} = render(<Chip text={'JavaScript'} maxTextLength={4} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
