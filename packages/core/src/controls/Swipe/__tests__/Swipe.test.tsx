import {act, render} from '@testing-library/react-native';

import Swipe from '../Swipe';
import {LABELS} from '../../../other';

const onPress = () => null;

const eventMock = {};
describe.skip('Swipe', () => {
  it('should renders correctly by default -', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={false} disabled={false} onPress={onPress} />,
    );
    const panHandler = getByLabelText(LABELS.swipe);
    act(() => panHandler.props.onPanResponderRelease({}, {dx: -10}));
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly by default +', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={false} disabled={false} onPress={onPress} />,
    );
    const panHandler = getByLabelText(LABELS.swipe);
    act(() => {
      panHandler.props.onPanResponderMove(eventMock, {dx: 0});
      panHandler.props.onPanResponderRelease(eventMock, {dx: 0});
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly by default active', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={true} disabled={false} onPress={onPress} />,
    );
    const panHandler = getByLabelText(LABELS.swipe);
    act(() => {
      panHandler.props.onPanResponderMove(eventMock, {dx: 0});
      panHandler.props.onPanResponderRelease(eventMock, {dx: 0});
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly active', function () {
    const {toJSON} = render(
      <Swipe active={false} disabled={false} onPress={onPress} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly disabled +', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={true} disabled onPress={onPress} />,
    );
    const panHandler = getByLabelText(LABELS.swipe);

    act(() => {
      panHandler.props.onPanResponderMove(eventMock, {dx: 0});
      panHandler.props.onPanResponderRelease(eventMock, {dx: 0});
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly disabled dx: 20', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={true} disabled onPress={onPress} />,
    );
    const panHandler = getByLabelText(LABELS.swipe);

    act(() => {
      panHandler.props.onPanResponderRelease(eventMock, {dx: 20});
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly disabled -', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={true} disabled onPress={onPress} />,
    );
    const panHandler = getByLabelText(LABELS.swipe);

    act(() => {
      panHandler.props.onStartShouldSetPanResponder(() => true);
      panHandler.props.onMoveShouldSetPanResponder(() => true);
      panHandler.props.onPanResponderGrant();
      panHandler.props.onPanResponderMove(eventMock, {dx: 0});
      panHandler.props.onPanResponderRelease(eventMock, {dx: -20});
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly active and disabled', function () {
    const {toJSON} = render(<Swipe active disabled onPress={onPress} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly when and toggle to active', function () {
    const {toJSON, getByLabelText} = render(
      <Swipe active={false} disabled={false} onPress={onPress} />,
    );
    const panHandler = getByLabelText(LABELS.swipe);

    act(() => {
      panHandler.props.onStartShouldSetPanResponder(() => true);
      panHandler.props.onMoveShouldSetPanResponder(() => true);
      panHandler.props.onPanResponderGrant();
      panHandler.props.onPanResponderMove(eventMock, {dx: 0});
      panHandler.props.onPanResponderRelease(eventMock, {dx: 20});
    });

    expect(toJSON()).toMatchSnapshot();
  });
});
