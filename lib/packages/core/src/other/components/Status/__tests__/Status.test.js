"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Status_1 = __importDefault(require("../Status"));
const types_1 = require("../types");
describe('Status', () => {
    it('render type dot green', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.dot} state={types_1.IStatusState.green} style={{ flex: 1 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render type dot red', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.dot} state={types_1.IStatusState.red}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render type dot blue', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.dot} state={types_1.IStatusState.blue}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render type dot gray', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.dot} state={types_1.IStatusState.gray}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render type dot orange', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.dot} state={types_1.IStatusState.orange}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render type tag green', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.tag} state={types_1.IStatusState.green} text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render type tag blue', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.tag} state={types_1.IStatusState.blue} text={'text'} style={{ flex: 1 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render type tag red', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.tag} state={types_1.IStatusState.red} text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render type tag gray', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.tag} state={types_1.IStatusState.gray} text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render type tag orange', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.tag} state={types_1.IStatusState.orange} text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render not state', () => {
        const { toJSON } = (0, react_native_1.render)(<Status_1.default type={types_1.IStatusType.tag} state={'yellow'} text={'text'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
