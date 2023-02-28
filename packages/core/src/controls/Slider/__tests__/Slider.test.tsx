import {act, fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import Slider from '../Slider';
import {LABELS} from '../../../other/constants';

const eventMock = {};
const trueFunc = () => true;
const falseFunc = () => false;

describe('Slider', () => {
  it('should renders correctly by default', function () {
    const {getByLabelText, toJSON} = render(
      <Slider min={0} max={100} step={1} />,
    );
    const panHandler = getByLabelText(LABELS.slider);
    act(() => panHandler.props.onMoveShouldSetPanResponder({}, {dx: -10}));
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with more props', function () {
    const {getByLabelText, toJSON} = render(
      <Slider
        min={0}
        max={100}
        step={1}
        minRange={10}
        low={20}
        high={60}
        disableRange={true}
      />,
    );
    const panHandler = getByLabelText(LABELS.slider);
    act(() => panHandler.props.onMoveShouldSetPanResponder({}, {dx: -10}));
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly panHandler', function () {
    const {getByLabelText, toJSON} = render(
      <Slider min={0} max={100} step={1} />,
    );
    const panHandler = getByLabelText(LABELS.slider);

    act(() => {
      panHandler.props.onStartShouldSetPanResponderCapture(falseFunc);
      panHandler.props.onMoveShouldSetPanResponderCapture(falseFunc);
      panHandler.props.onPanResponderTerminationRequest(falseFunc);
      panHandler.props.onPanResponderTerminate(trueFunc);
      panHandler.props.onShouldBlockNativeResponder(trueFunc);
      panHandler.props.onMoveShouldSetPanResponder(eventMock, {dx: 10, dy: 0});
      panHandler.props.onPanResponderGrant(
        {
          nativeEvent: {
            locationX: 21,
            locationY: 5,
            pageX: 33,
            pageY: 152,
            target: 723,
          },
        },
        {dx: 10, dy: 0},
      );
      panHandler.props.onPanResponderMove(eventMock, {moveX: 20});
    });
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly disabled', function () {
    const {getByLabelText, toJSON} = render(
      <Slider min={0} max={100} step={1} disableRange={true} disabled={true} />,
    );
    const panHandler = getByLabelText(LABELS.slider);

    act(() => {
      panHandler.props.onPanResponderTerminate(trueFunc);
      panHandler.props.onShouldBlockNativeResponder(trueFunc);
      panHandler.props.onMoveShouldSetPanResponder(eventMock, {dx: 10, dy: 0});
      panHandler.props.onPanResponderGrant(
        {
          nativeEvent: {
            locationX: 21,
            locationY: 5,
            pageX: 33,
            pageY: 152,
            target: 723,
          },
        },
        {dx: 10, dy: 0},
      );
    });
    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly updateThumbs', function () {
    const {getByLabelText, toJSON} = render(
      <Slider min={20} max={100} step={1} disableRange={true} />,
    );
    const panHandler = getByLabelText(LABELS.slider);
    const layout = getByLabelText(LABELS.sliderLayoutLowThumb);

    act(() => {
      panHandler.props.onPanResponderTerminate(trueFunc);
      panHandler.props.onShouldBlockNativeResponder(trueFunc);
      panHandler.props.onMoveShouldSetPanResponder(eventMock, {dx: 10, dy: 0});
      panHandler.props.onPanResponderGrant(
        {
          nativeEvent: {
            locationX: 21,
            locationY: 5,
            pageX: 33,
            pageY: 152,
            target: 723,
          },
        },
        {dx: 10, dy: 0},
      );
      panHandler.props.onPanResponderMove(eventMock, {moveX: 40});
    });
    expect(toJSON()).toMatchSnapshot();
    act(() => {
      fireEvent(layout, 'layout', {
        nativeEvent: {layout: {width: 100}},
      });
    });
  });
});
