"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Title_1 = __importDefault(require("../Title"));
describe('@lad-tech/mobydick-core/TooltipBase/Title', () => {
    it('should renders correctly font', () => {
        const { toJSON } = (0, react_native_1.render)(<Title_1.default title={'title'} titleFont={'Regular-Primary-XS'} titleStyles={{ width: 100 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<Title_1.default title={'title'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
