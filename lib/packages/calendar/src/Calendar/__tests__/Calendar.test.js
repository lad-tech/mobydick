"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Calendar_1 = __importDefault(require("../Calendar"));
const constants_1 = require("../constants");
describe('Calendar', () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2022-07-15'));
    });
    afterAll(() => {
        jest.useRealTimers();
    });
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default />);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isClear', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default isClear={true} initialRange={{ fromDate: '2022-02-16', toDate: '2022-02-19' }} isShowToday={false}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isShowToday = true > maxLengthDateRange maxDate minDate', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialRange={{ fromDate: '2022-07-01', toDate: '2022-07-04' }} isShowToday={true} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isShowToday = false > maxLengthDateRange maxDate minDate', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialRange={{ fromDate: '2022-07-01', toDate: '2022-07-04' }} isShowToday={false} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isShowToday = true < maxLengthDateRange maxDate minDate', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialRange={{ fromDate: '2022-07-13', toDate: '2022-07-14' }} isShowToday={true} maxDate={'2022-07-20'} minDate={'2022-07-13'} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isShowToday = true < maxLengthDateRange', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialDate={'2022-07-13'} isShowToday={true} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isShowToday = true > maxLengthDateRange', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialDate={'2022-07-13'} isShowToday={true} maxLengthDateRange={2}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly not isValidDate', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default isClear={true} initialRange={{ fromDate: 'jijk', toDate: 'lklk' }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly isClear isShowToday', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default isClear={true} initialRange={{ fromDate: '2022-02-16' }} initialDate={'2022-02'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press calendarLeftArrow', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Calendar_1.default onDateRangeChange={() => undefined} isShowToday={false}/>);
        const calendarLeftArrow = getByLabelText(constants_1.LABELS.calendarLeftArrow);
        react_native_1.fireEvent.press(calendarLeftArrow);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press calendarLeftArrow 01 -> 12', () => {
        jest.setSystemTime(new Date('2022-01-15'));
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Calendar_1.default onDateRangeChange={() => undefined} isShowToday={false}/>);
        const calendarLeftArrow = getByLabelText(constants_1.LABELS.calendarLeftArrow);
        react_native_1.fireEvent.press(calendarLeftArrow);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press calendarPressTitle * 2 calendarLeftArrow', () => {
        const { toJSON, getByLabelText, getAllByLabelText } = (0, react_native_1.render)(<Calendar_1.default onDateRangeChange={() => undefined} isShowToday={false}/>);
        const calendarPressTitleMonth = getByLabelText(constants_1.LABELS.calendarPressTitleMonth);
        react_native_1.fireEvent.press(calendarPressTitleMonth); //months
        const calendarPressTitleYear = getByLabelText(constants_1.LABELS.calendarPressTitleYear);
        const calendarLeftArrow = getByLabelText(constants_1.LABELS.calendarLeftArrow);
        react_native_1.fireEvent.press(calendarLeftArrow);
        react_native_1.fireEvent.press(calendarPressTitleYear); //years
        react_native_1.fireEvent.press(calendarLeftArrow);
        const pressYear = getAllByLabelText(constants_1.LABELS.pressYear)[2];
        pressYear && react_native_1.fireEvent.press(pressYear);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press calendarPressTitle * 3 calendarLeftArrow', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Calendar_1.default onDateRangeChange={() => undefined} isShowToday={false}/>);
        const calendarPressTitleMonth = getByLabelText(constants_1.LABELS.calendarPressTitleMonth);
        react_native_1.fireEvent.press(calendarPressTitleMonth); //months
        const calendarPressTitleYear = getByLabelText(constants_1.LABELS.calendarPressTitleYear);
        const calendarLeftArrow = getByLabelText(constants_1.LABELS.calendarLeftArrow);
        react_native_1.fireEvent.press(calendarLeftArrow);
        react_native_1.fireEvent.press(calendarPressTitleYear); //years
        react_native_1.fireEvent.press(calendarLeftArrow);
        react_native_1.fireEvent.press(calendarPressTitleYear); //range years
        react_native_1.fireEvent.press(calendarLeftArrow);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press calendarRightArrow', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Calendar_1.default onDateRangeChange={() => undefined} isShowToday={false}/>);
        const calendarRightArrow = getByLabelText(constants_1.LABELS.calendarRightArrow);
        react_native_1.fireEvent.press(calendarRightArrow);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press calendarRightArrow 12 -> 1', () => {
        jest.setSystemTime(new Date('2022-12-15'));
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Calendar_1.default onDateRangeChange={() => undefined} isShowToday={false}/>);
        const calendarRightArrow = getByLabelText(constants_1.LABELS.calendarRightArrow);
        react_native_1.fireEvent.press(calendarRightArrow);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press calendarPressTitle calendarRightArrow', () => {
        const { toJSON, getByLabelText, getAllByLabelText } = (0, react_native_1.render)(<Calendar_1.default onDateRangeChange={() => undefined} isShowToday={false}/>);
        const calendarPressTitleMonth = getByLabelText(constants_1.LABELS.calendarPressTitleMonth);
        react_native_1.fireEvent.press(calendarPressTitleMonth); //months
        const calendarPressTitleYear = getByLabelText(constants_1.LABELS.calendarPressTitleYear);
        const calendarRightArrow = getByLabelText(constants_1.LABELS.calendarRightArrow);
        react_native_1.fireEvent.press(calendarRightArrow);
        const pressMonth = getAllByLabelText(constants_1.LABELS.pressMonth)[5];
        pressMonth && react_native_1.fireEvent.press(pressMonth);
        react_native_1.fireEvent.press(calendarPressTitleYear); // years
        react_native_1.fireEvent.press(calendarPressTitleYear); // range years
        react_native_1.fireEvent.press(calendarRightArrow);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press calendarPressTitle*2 calendarRightArrow', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Calendar_1.default onDateRangeChange={() => undefined} isShowToday={false}/>);
        const calendarPressTitleMonth = getByLabelText(constants_1.LABELS.calendarPressTitleMonth);
        react_native_1.fireEvent.press(calendarPressTitleMonth); //months
        const calendarPressTitleYear = getByLabelText(constants_1.LABELS.calendarPressTitleYear);
        const calendarRightArrow = getByLabelText(constants_1.LABELS.calendarRightArrow);
        react_native_1.fireEvent.press(calendarRightArrow);
        react_native_1.fireEvent.press(calendarPressTitleYear); //years
        react_native_1.fireEvent.press(calendarRightArrow);
        react_native_1.fireEvent.press(calendarPressTitleYear); //range years
        react_native_1.fireEvent.press(calendarRightArrow);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press calendarPressTitleYear', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Calendar_1.default onDateRangeChange={() => undefined} isShowToday={false}/>);
        const calendarPressTitleYear = getByLabelText(constants_1.LABELS.calendarPressTitleYear);
        react_native_1.fireEvent.press(calendarPressTitleYear); // years
        react_native_1.fireEvent.press(calendarPressTitleYear); // range years
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly dottedDates', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default isClear={true} initialRange={{ fromDate: '2022-01-16', toDate: '2022-01-19' }} isShowToday={false} dottedDates={[
                new Date('2022-02-08'),
                new Date('2022-02-28'),
                new Date('2022-02-16'),
            ]}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly dottedDates cc', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default isClear={true} initialRange={{ fromDate: '2022-01-16', toDate: '2022-01-19' }} isShowToday={false} dottedDates={[
                new Date('2022-02-08'),
                new Date('2022-02-28'),
                new Date('2022-02-16'),
            ]}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly maxLengthDateRange', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default isClear={true} initialRange={{ fromDate: '2022-01-16', toDate: '2022-01-19' }} initialDate={'2022-01-16'} isShowToday={false} isPeriod={true} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly minDate maxLengthDateRange', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialRange={{ fromDate: '2022-01-16', toDate: '2022-01-19' }} isShowToday={false} isPeriod={true} minDate={'2022-01-16'} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly maxDate maxLengthDateRange', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialRange={{ fromDate: '2022-01-16', toDate: '2022-01-19' }} isShowToday={false} isPeriod={true} maxDate={'2022-01-19'} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly maxDate minDate maxLengthDateRange', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialRange={{ fromDate: '2022-01-16', toDate: '2022-01-19' }} isShowToday={false} isPeriod={true} maxDate={'2022-01-29'} minDate={'2022-01-16'} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly maxDate minDate maxLengthDateRange isPeriod = false', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialRange={{ fromDate: '2022-01-16', toDate: '2022-01-19' }} isShowToday={false} maxDate={'2022-01-29'} minDate={'2022-01-14'} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly maxDate minDate maxLengthDateRange fromDate = toDate', () => {
        const { toJSON } = (0, react_native_1.render)(<Calendar_1.default initialRange={{ fromDate: '2022-02-16', toDate: '2022-02-16' }} isShowToday={false} maxDate={'2022-03-29'} minDate={'2022-01-01'} maxLengthDateRange={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
