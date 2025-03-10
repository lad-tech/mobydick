import {act, fireEvent, render} from '@testing-library/react-native';

import Dots from '../Dots';
import {LABELS} from '../../../constants';

describe('Dots', () => {
  test('render dots length > 7', () => {
    const {toJSON} = render(<Dots length={10} activeDot={0} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots length < 7', () => {
    const {toJSON} = render(<Dots length={6} activeDot={0} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots activeDot=2', () => {
    const {toJSON} = render(<Dots length={16} activeDot={2} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots activeDot=2 fixedSize', () => {
    const {toJSON} = render(
      <Dots
        length={5}
        activeDot={2}
        fixedSize={4}
        passiveDotColor={'black'}
        activeDotColor={'red'}
        dotsStyles={{zIndex: 2}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots activeDot=10', () => {
    const {toJSON} = render(
      <Dots length={10} activeDot={9} animateAutoScroll={false} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots activeDot right', () => {
    const {toJSON, rerender} = render(<Dots length={10} activeDot={9} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={2} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={1} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={0} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('render dots activeDot left', () => {
    const {toJSON, rerender} = render(<Dots length={10} activeDot={3} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={0} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={1} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={5} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots = 0', () => {
    const {toJSON} = render(<Dots length={0} activeDot={0} />);

    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots onLayout', () => {
    const {toJSON, getByLabelText} = render(<Dots length={10} activeDot={0} />);

    const layout = getByLabelText(LABELS.dotsAnimatedView);

    expect(toJSON()).toMatchSnapshot();
    act(() => {
      fireEvent(layout, 'layout', {
        nativeEvent: {layout: {height: 100}},
      });
    });
  });
  test('render dots activeDot=10 animateAutoScroll', () => {
    const {toJSON} = render(
      <Dots length={10} activeDot={9} animateAutoScroll={true} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
