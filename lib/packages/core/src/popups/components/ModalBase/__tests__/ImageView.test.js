"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const ImageView_1 = __importDefault(require("../ImageView"));
describe('@lad-tech/mobydick-core/ImageView', () => {
    it('should renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ImageView_1.default image={<View_1.default />}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with styles', () => {
        const { toJSON } = (0, react_native_1.render)(<ImageView_1.default image={<View_1.default />} imageStyles={{ flex: 1 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
