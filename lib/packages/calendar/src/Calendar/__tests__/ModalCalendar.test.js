"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const types_1 = require("../types");
const ModalCalendar_1 = __importDefault(require("../ModalCalendar"));
describe('ModalCalendar', () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2022-07-15'));
    });
    afterAll(() => {
        jest.useRealTimers();
    });
    it('renders correctly', () => {
        const submit = jest.fn();
        const { toJSON } = (0, react_native_1.render)(<ModalCalendar_1.default id={'1'} onClose={() => undefined} onDateRangeChange={submit}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('bottomView IButtonView.small onAcceptDateRangeChange', () => {
        const submit = jest.fn();
        const { toJSON, getByText } = (0, react_native_1.render)(<ModalCalendar_1.default id={'1'} onClose={() => undefined} onAcceptDateRangeChange={submit} isCounter={false} descriptionText={'textCalendar'} buttonView={types_1.IButtonView.small}/>);
        const applyButton = getByText('Применить');
        react_native_1.fireEvent.press(applyButton);
        expect(toJSON()).toMatchSnapshot();
    });
    it('bottomView IButtonView.small onDateRangeChange', () => {
        const submit = jest.fn();
        const { toJSON, getByText } = (0, react_native_1.render)(<ModalCalendar_1.default id={'1'} onClose={() => undefined} onDateRangeChange={submit} isCounter={false} descriptionText={'textCalendar'} buttonView={types_1.IButtonView.small}/>);
        const applyButton = getByText('Применить');
        react_native_1.fireEvent.press(applyButton);
        expect(toJSON()).toMatchSnapshot();
    });
    it('bottomView IButtonView.large', () => {
        const submit = jest.fn();
        const { toJSON, getByText } = (0, react_native_1.render)(<ModalCalendar_1.default id={'1'} onClose={() => undefined} onDateRangeChange={submit} descriptionText={'textCalendar'} isCounter={true} titlePrefix={'titlePrefix'} titleSuffix={'titleSuffix'} titleFont={'Regular-Muted-M'} descriptionFont={'Medium-Primary-M'} buttonView={types_1.IButtonView.large}/>);
        const dateStart = getByText('11');
        react_native_1.fireEvent.press(dateStart);
        const applyButton = getByText('Сбросить');
        react_native_1.fireEvent.press(applyButton);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly initialRange', () => {
        const submit = jest.fn();
        const { toJSON, getByText } = (0, react_native_1.render)(<ModalCalendar_1.default id={'1'} onClose={() => undefined} onDateRangeChange={submit} initialRange={{ fromDate: '2022-02-16', toDate: '2022-02-17' }}/>);
        const dateStart = getByText('16');
        react_native_1.fireEvent.press(dateStart);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly initialRange only fromDate isShowToday', () => {
        const submit = jest.fn();
        const { toJSON, getByText } = (0, react_native_1.render)(<ModalCalendar_1.default id={'1'} onClose={() => undefined} onDateRangeChange={submit} initialRange={{ fromDate: '2022-02-16' }} isShowToday={true} isCounter={true} buttonView={types_1.IButtonView.large}/>);
        const applyButton = getByText('Сбросить');
        react_native_1.fireEvent.press(applyButton);
        expect(toJSON()).toMatchSnapshot();
    });
});
