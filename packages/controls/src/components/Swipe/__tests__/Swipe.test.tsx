import {act, render} from '@testing-library/react-native';
import React from 'react';

import Swipe from '../Swipe';

const onPress = () => null;
// const gestureStateMOck = {
//   dx: 0,
//   dy: 0,
//   moveX: 0,
//   moveY: 0,
//   numberActiveTouches: 0,
//   stateID: 0.36193975836547276,
//   vx: 0,
//   vy: 0,
//   x0: 0,
//   y0: 0,
// };
//
// const gestureStateMOckDx = {
//   dx: 20,
//   dy: 0,
//   moveX: 0,
//   moveY: 0,
//   numberActiveTouches: 0,
//   stateID: 0.36193975836547276,
//   vx: 0,
//   vy: 0,
//   x0: 0,
//   y0: 0,
// };
const eventMock = {};
describe('Swipe', () => {
  it('should renders correctly by default -', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={false} disabled={false} onPress={onPress} />,
    );
    const panHandler = getByLabelText('swipe');
    act(() => panHandler.props.onPanResponderRelease({}, {dx: -10}));
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly by default + ', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={false} disabled={false} onPress={onPress} />,
    );
    const panHandler = getByLabelText('swipe');
    act(() => panHandler.props.onPanResponderRelease({}, {dx: 20}));
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly active', function () {
    const {toJSON} = render(
      <Swipe active={false} disabled={false} onPress={onPress} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly disabled + ', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={true} disabled onPress={onPress} />,
    );
    const panHandler = getByLabelText('swipe');

    act(() => {
      panHandler.props.onStartShouldSetPanResponder(() => true);
      panHandler.props.onMoveShouldSetPanResponder(() => true);
      panHandler.props.onPanResponderGrant();
      panHandler.props.onPanResponderMove(eventMock, {dx: 0});
      panHandler.props.onPanResponderRelease(eventMock, {dx: 20});
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly disabled - ', function () {
    const {getByLabelText, toJSON} = render(
      <Swipe active={true} disabled onPress={onPress} />,
    );
    const panHandler = getByLabelText('swipe');

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
});
