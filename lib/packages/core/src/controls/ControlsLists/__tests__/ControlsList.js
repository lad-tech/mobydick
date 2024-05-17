"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const index_1 = require("../index");
const CheckBox_1 = require("../../CheckBox");
const Radio_1 = require("../../Radio");
const Typography_1 = require("../../../typography/components/Typography/Typography");
describe('ControlsList', () => {
    it('should renders correctly with checkbox type', function () {
        const { toJSON } = (0, react_native_1.render)(<index_1.ControlsList single={false} onChange={jest.fn} values={[]}>
        <CheckBox_1.CheckBox value={'1'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>1</Typography_1.Typography>
        </CheckBox_1.CheckBox>
        <CheckBox_1.CheckBox value={'2'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>2</Typography_1.Typography>
        </CheckBox_1.CheckBox>
      </index_1.ControlsList>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with checkbox type and single', function () {
        const { toJSON } = (0, react_native_1.render)(<index_1.ControlsList single onChange={jest.fn} values={[]}>
        <CheckBox_1.CheckBox value={'1'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>1</Typography_1.Typography>
        </CheckBox_1.CheckBox>
        <CheckBox_1.CheckBox value={'2'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>2</Typography_1.Typography>
        </CheckBox_1.CheckBox>
      </index_1.ControlsList>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with checkbox type and horizontal', function () {
        const { toJSON } = (0, react_native_1.render)(<index_1.ControlsList single onChange={jest.fn} horizontal values={[]}>
        <CheckBox_1.CheckBox value={'1'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>1</Typography_1.Typography>
        </CheckBox_1.CheckBox>
        <CheckBox_1.CheckBox value={'2'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>2</Typography_1.Typography>
        </CheckBox_1.CheckBox>
      </index_1.ControlsList>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with radio type', function () {
        const { toJSON } = (0, react_native_1.render)(<index_1.ControlsList single onChange={jest.fn} values={['1']}>
        <Radio_1.Radio value={'1'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>1</Typography_1.Typography>
        </Radio_1.Radio>
        <Radio_1.Radio value={'2'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>2</Typography_1.Typography>
        </Radio_1.Radio>
      </index_1.ControlsList>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with radio type and single', function () {
        const { toJSON } = (0, react_native_1.render)(<index_1.ControlsList single onChange={jest.fn} values={[]}>
        <Radio_1.Radio value={'1'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>1</Typography_1.Typography>
        </Radio_1.Radio>
        <Radio_1.Radio value={'2'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>2</Typography_1.Typography>
        </Radio_1.Radio>
      </index_1.ControlsList>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with radio type and horizontal', function () {
        const { toJSON } = (0, react_native_1.render)(<index_1.ControlsList onChange={jest.fn} horizontal values={[]}>
        <Radio_1.Radio value={'1'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>1</Typography_1.Typography>
        </Radio_1.Radio>
        <Radio_1.Radio value={'2'}>
          <Typography_1.Typography font={'Regular-Primary-M'}>2</Typography_1.Typography>
        </Radio_1.Radio>
      </index_1.ControlsList>);
        expect(toJSON()).toMatchSnapshot();
    });
});
