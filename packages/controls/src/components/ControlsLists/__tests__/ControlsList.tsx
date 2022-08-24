import {render} from '@testing-library/react-native';
import React from 'react';
import {Typography} from '@npm/mobydick-typography';

import {ControlsList} from '../index';
import {CheckBox} from '../../CheckBox';
import {Radio} from '../../Radio';

describe('ControlsList', () => {
  it('should renders correctly with checkbox type', function () {
    const {toJSON} = render(
      <ControlsList single={false} onChange={jest.fn}>
        <CheckBox value={'1'}>
          <Typography font={'Regular-Primary-M'}>1</Typography>
        </CheckBox>
        <CheckBox value={'2'}>
          <Typography font={'Regular-Primary-M'}>2</Typography>
        </CheckBox>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with checkbox type and single', function () {
    const {toJSON} = render(
      <ControlsList single onChange={jest.fn}>
        <CheckBox value={'1'}>
          <Typography font={'Regular-Primary-M'}>1</Typography>
        </CheckBox>
        <CheckBox value={'2'}>
          <Typography font={'Regular-Primary-M'}>2</Typography>
        </CheckBox>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with checkbox type and horizontal', function () {
    const {toJSON} = render(
      <ControlsList single onChange={jest.fn} horizontal>
        <CheckBox value={'1'}>
          <Typography font={'Regular-Primary-M'}>1</Typography>
        </CheckBox>
        <CheckBox>
          <Typography font={'Regular-Primary-M'}>2</Typography>
        </CheckBox>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with radio type', function () {
    const {toJSON} = render(
      <ControlsList single onChange={jest.fn}>
        <Radio value={'1'}>
          <Typography font={'Regular-Primary-M'}>1</Typography>
        </Radio>
        <Radio value={'2'}>
          <Typography font={'Regular-Primary-M'}>2</Typography>
        </Radio>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with radio type and single', function () {
    const {toJSON} = render(
      <ControlsList single onChange={jest.fn}>
        <Radio value={'1'}>
          <Typography font={'Regular-Primary-M'}>1</Typography>
        </Radio>
        <Radio value={'2'}>
          <Typography font={'Regular-Primary-M'}>2</Typography>
        </Radio>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with radio type and horizontal', function () {
    const {toJSON} = render(
      <ControlsList onChange={jest.fn} horizontal>
        <Radio value={'1'}>
          <Typography font={'Regular-Primary-M'}>1</Typography>
        </Radio>
        <Radio value={'2'}>
          <Typography font={'Regular-Primary-M'}>2</Typography>
        </Radio>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
