import {fireEvent, render} from '@testing-library/react-native';

import SimpleIconAlbum from '../SimpleIconAlbum';

describe('@lad-tech/mobydick-core/icons/SimpleIconAlbum', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<SimpleIconAlbum onPress={() => console.log()} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with color', () => {
    const {toJSON} = render(
      <SimpleIconAlbum color="#333" onPress={() => console.log()} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with press', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <SimpleIconAlbum color="#333" onPress={onPress} />,
    );
    const pressable = getByTestId('icon-image');

    fireEvent.press(pressable, {target: null, currentTarget: null});

    expect(onPress).toHaveBeenCalledWith('icon-image');
  });
});
