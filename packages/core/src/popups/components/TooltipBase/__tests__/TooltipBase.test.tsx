import {render} from '@testing-library/react-native';
import {TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

import TooltipBase from '../TooltipBase';
import {IPlacement} from '../types';
import {IPosition} from '../../../types';
import Button from '../../../../cta/components/Button/Button';
import {ITouchableOpacity} from '../../../../basic/components/TouchableOpacity/types';

describe('@lad-tech/mobydick-core/TooltipBase/TooltipBase', () => {
  jest.useFakeTimers();
  let buttonRef: React.RefObject<ITouchableOpacity>;
  beforeEach(() => {
    buttonRef = React.createRef();
    render(<Button ref={buttonRef} />);
  });
  it('should renders correctly bottom center', () => {
    jest
      .spyOn(buttonRef.current as TouchableOpacity, 'measure')
      .mockImplementation(
        (
          cb: (
            x: number,
            y: number,
            width: number,
            height: number,
            pageX: number,
            pageY: number,
          ) => void,
        ) => cb(0, 24, 1, 1, 287, 2410),
      );

    const {toJSON} = render(
      <SafeAreaProvider>
        <TooltipBase
          id={'id'}
          onClose={() => null}
          position={IPosition.bottom}
          placement={IPlacement.center}
          refCurrent={buttonRef}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly top start', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <TooltipBase
          id={'id'}
          onClose={() => null}
          position={IPosition.top}
          placement={IPlacement.start}
          refCurrent={buttonRef}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly top end', () => {
    const {toJSON} = render(
      <SafeAreaProvider>
        <TooltipBase
          id={'id'}
          onClose={() => null}
          position={IPosition.top}
          placement={IPlacement.end}
          refCurrent={buttonRef}
        />
      </SafeAreaProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly Timeshow', () => {
    const onClose = jest.fn();
    const {toJSON} = render(
      <SafeAreaProvider>
        <TooltipBase
          id={'id'}
          onClose={onClose}
          timeShow={3000}
          position={IPosition.top}
          placement={IPlacement.end}
          refCurrent={buttonRef}
        />
      </SafeAreaProvider>,
    );
    jest.runAllTimers();
    expect(toJSON()).toMatchSnapshot();
  });
});
