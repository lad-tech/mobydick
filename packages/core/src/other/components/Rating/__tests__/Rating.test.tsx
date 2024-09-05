import {act, fireEvent, render} from '@testing-library/react-native';

import {Rating} from '../index';
import {LABELS} from '../../../constants';

describe('Rating', () => {
  test('render rating 0', () => {
    const onPress = jest.fn();
    const {toJSON} = render(
      <Rating count={0} setCurrentRate={onPress} currentRate={0} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render rating 1', () => {
    const onPress = jest.fn();
    const {toJSON} = render(
      <Rating count={1} setCurrentRate={onPress} currentRate={1} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render rating 2', () => {
    const onPress = jest.fn();
    const {toJSON} = render(
      <Rating count={2} setCurrentRate={onPress} currentRate={2} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render rating 3', () => {
    const onPress = jest.fn();
    const {toJSON} = render(
      <Rating count={3} setCurrentRate={onPress} currentRate={3} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('change rating', () => {
    const onPress = jest.fn();
    const {getByLabelText} = render(
      <Rating count={5} setCurrentRate={onPress} currentRate={2} />,
    );
    const setRatingButton = getByLabelText(`${LABELS.ratingStarButton}4`);

    act(() => {
      fireEvent.press(setRatingButton);
    });

    expect(onPress).toHaveBeenCalledWith(4);
  });
  test('change rating is disabled', () => {
    const onPress = jest.fn();
    const {getByLabelText} = render(
      <Rating
        count={5}
        setCurrentRate={onPress}
        disabled={true}
        currentRate={5}
      />,
    );
    const setRatingButton = getByLabelText(`${LABELS.ratingStarButton}4`);

    act(() => {
      fireEvent.press(setRatingButton);
    });

    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
