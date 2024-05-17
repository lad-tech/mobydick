"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Swipe_1 = __importDefault(require("../Swipe"));
const other_1 = require("../../../other");
const onPress = () => null;
const eventMock = {};
describe.skip('Swipe', () => {
    it('should renders correctly by default -', function () {
        const { getByLabelText, toJSON } = (0, react_native_1.render)(<Swipe_1.default active={false} disabled={false} onPress={onPress}/>);
        const panHandler = getByLabelText(other_1.LABELS.swipe);
        (0, react_native_1.act)(() => panHandler.props.onPanResponderRelease({}, { dx: -10 }));
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly by default +', function () {
        const { getByLabelText, toJSON } = (0, react_native_1.render)(<Swipe_1.default active={false} disabled={false} onPress={onPress}/>);
        const panHandler = getByLabelText(other_1.LABELS.swipe);
        (0, react_native_1.act)(() => {
            panHandler.props.onPanResponderMove(eventMock, { dx: 0 });
            panHandler.props.onPanResponderRelease(eventMock, { dx: 0 });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly by default active', function () {
        const { getByLabelText, toJSON } = (0, react_native_1.render)(<Swipe_1.default active={true} disabled={false} onPress={onPress}/>);
        const panHandler = getByLabelText(other_1.LABELS.swipe);
        (0, react_native_1.act)(() => {
            panHandler.props.onPanResponderMove(eventMock, { dx: 0 });
            panHandler.props.onPanResponderRelease(eventMock, { dx: 0 });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly active', function () {
        const { toJSON } = (0, react_native_1.render)(<Swipe_1.default active={false} disabled={false} onPress={onPress}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly disabled +', function () {
        const { getByLabelText, toJSON } = (0, react_native_1.render)(<Swipe_1.default active={true} disabled onPress={onPress}/>);
        const panHandler = getByLabelText(other_1.LABELS.swipe);
        (0, react_native_1.act)(() => {
            panHandler.props.onPanResponderMove(eventMock, { dx: 0 });
            panHandler.props.onPanResponderRelease(eventMock, { dx: 0 });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly disabled dx: 20', function () {
        const { getByLabelText, toJSON } = (0, react_native_1.render)(<Swipe_1.default active={true} disabled onPress={onPress}/>);
        const panHandler = getByLabelText(other_1.LABELS.swipe);
        (0, react_native_1.act)(() => {
            panHandler.props.onPanResponderRelease(eventMock, { dx: 20 });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly disabled -', function () {
        const { getByLabelText, toJSON } = (0, react_native_1.render)(<Swipe_1.default active={true} disabled onPress={onPress}/>);
        const panHandler = getByLabelText(other_1.LABELS.swipe);
        (0, react_native_1.act)(() => {
            panHandler.props.onStartShouldSetPanResponder(() => true);
            panHandler.props.onMoveShouldSetPanResponder(() => true);
            panHandler.props.onPanResponderGrant();
            panHandler.props.onPanResponderMove(eventMock, { dx: 0 });
            panHandler.props.onPanResponderRelease(eventMock, { dx: -20 });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly active and disabled', function () {
        const { toJSON } = (0, react_native_1.render)(<Swipe_1.default active disabled onPress={onPress}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly when and toggle to active', function () {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Swipe_1.default active={false} disabled={false} onPress={onPress}/>);
        const panHandler = getByLabelText(other_1.LABELS.swipe);
        (0, react_native_1.act)(() => {
            panHandler.props.onStartShouldSetPanResponder(() => true);
            panHandler.props.onMoveShouldSetPanResponder(() => true);
            panHandler.props.onPanResponderGrant();
            panHandler.props.onPanResponderMove(eventMock, { dx: 0 });
            panHandler.props.onPanResponderRelease(eventMock, { dx: 20 });
        });
        expect(toJSON()).toMatchSnapshot();
    });
});
