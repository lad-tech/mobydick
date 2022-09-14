import {render} from '@testing-library/react-native';
import React from 'react';

import Arrow from '../Arrow';
import {IPlacement, IPosition} from '../types';

describe('@npm/mobydick-popups/TooltipBase/Arrow', () => {
  it('should renders correctly top start', () => {
    const {toJSON} = render(
      <Arrow
        placement={IPlacement.start}
        position={IPosition.top}
        colorTooltip={'#000'}
        arrowViewStyles={{width: 20}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly bottom center', () => {
    const {toJSON} = render(
      <Arrow
        placement={IPlacement.center}
        position={IPosition.bottom}
        colorTooltip={'#000'}
        arrowViewStyles={{width: 20}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly bottom end', () => {
    const {toJSON} = render(
      <Arrow
        placement={IPlacement.end}
        position={IPosition.bottom}
        colorTooltip={'#000'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
