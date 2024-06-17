import {render} from '@testing-library/react-native';

import {ControlsList} from '../index';
import {CheckBox} from '../../CheckBox';
import {Radio} from '../../Radio';
import {TypographyLegacy} from '../../../typography/components/TypographyLegacy/TypographyLegacy';

describe('ControlsList', () => {
  it('should renders correctly with checkbox type', function () {
    const {toJSON} = render(
      <ControlsList single={false} onChange={jest.fn} values={[]}>
        <CheckBox value={'1'}>
          <TypographyLegacy font={'Regular-Primary-M'}>1</TypographyLegacy>
        </CheckBox>
        <CheckBox value={'2'}>
          <TypographyLegacy font={'Regular-Primary-M'}>2</TypographyLegacy>
        </CheckBox>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with checkbox type and single', function () {
    const {toJSON} = render(
      <ControlsList single onChange={jest.fn} values={[]}>
        <CheckBox value={'1'}>
          <TypographyLegacy font={'Regular-Primary-M'}>1</TypographyLegacy>
        </CheckBox>
        <CheckBox value={'2'}>
          <TypographyLegacy font={'Regular-Primary-M'}>2</TypographyLegacy>
        </CheckBox>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with checkbox type and horizontal', function () {
    const {toJSON} = render(
      <ControlsList single onChange={jest.fn} horizontal values={[]}>
        <CheckBox value={'1'}>
          <TypographyLegacy font={'Regular-Primary-M'}>1</TypographyLegacy>
        </CheckBox>
        <CheckBox value={'2'}>
          <TypographyLegacy font={'Regular-Primary-M'}>2</TypographyLegacy>
        </CheckBox>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with radio type', function () {
    const {toJSON} = render(
      <ControlsList single onChange={jest.fn} values={['1']}>
        <Radio value={'1'}>
          <TypographyLegacy font={'Regular-Primary-M'}>1</TypographyLegacy>
        </Radio>
        <Radio value={'2'}>
          <TypographyLegacy font={'Regular-Primary-M'}>2</TypographyLegacy>
        </Radio>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with radio type and single', function () {
    const {toJSON} = render(
      <ControlsList single onChange={jest.fn} values={[]}>
        <Radio value={'1'}>
          <TypographyLegacy font={'Regular-Primary-M'}>1</TypographyLegacy>
        </Radio>
        <Radio value={'2'}>
          <TypographyLegacy font={'Regular-Primary-M'}>2</TypographyLegacy>
        </Radio>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly with radio type and horizontal', function () {
    const {toJSON} = render(
      <ControlsList onChange={jest.fn} horizontal values={[]}>
        <Radio value={'1'}>
          <TypographyLegacy font={'Regular-Primary-M'}>1</TypographyLegacy>
        </Radio>
        <Radio value={'2'}>
          <TypographyLegacy font={'Regular-Primary-M'}>2</TypographyLegacy>
        </Radio>
      </ControlsList>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
