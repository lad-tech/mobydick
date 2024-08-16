import {act, fireEvent, render} from '@testing-library/react-native';

import {Rating} from '../index';
import {LABELS} from '../../../constants';

describe('Rating', () => {
  test('render rating 0', () => {
    const onPress = jest.fn();
    const {toJSON} = render(<Rating count={0} onChange={onPress} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render rating 1', () => {
    const onPress = jest.fn();
    const {toJSON} = render(<Rating count={1} onChange={onPress} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render rating 2', () => {
    const onPress = jest.fn();
    const {toJSON} = render(<Rating count={2} onChange={onPress} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render rating 3', () => {
    const onPress = jest.fn();
    const {toJSON} = render(<Rating count={3} onChange={onPress} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render rating 4', () => {
    const onPress = jest.fn();
    const {toJSON} = render(<Rating count={4} onChange={onPress} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render rating 5', () => {
    const onPress = jest.fn();
    const {toJSON} = render(<Rating count={5} onChange={onPress} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('change rating', () => {
    const onPress = jest.fn();
    const {toJSON, getByLabelText} = render(
      <Rating count={5} onChange={onPress} />,
    );
    const setRatingButton = getByLabelText(`${LABELS.ratingStarButton}4`);

    act(() => {
      fireEvent.press(setRatingButton);
    });

    expect(setRatingButton.props.accessibilityState).toHaveProperty(
      'disabled',
      undefined,
    );
    expect(onPress).toHaveBeenCalledWith(5);

    expect(toJSON()).toMatchSnapshot();
  });
  test('change rating is disabled', () => {
    const onPress = jest.fn();
    const {toJSON, getByLabelText} = render(
      <Rating count={5} onChange={onPress} disabled={true} currentRate={2} />,
    );
    const setRatingButton = getByLabelText(`${LABELS.ratingStarButton}4`);

    act(() => {
      fireEvent.press(setRatingButton);
    });

    expect(setRatingButton.props.accessibilityState).toHaveProperty(
      'disabled',
      true,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
