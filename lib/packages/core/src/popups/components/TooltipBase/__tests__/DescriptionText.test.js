"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const DescriptionText_1 = __importDefault(require("../DescriptionText"));
describe('@lad-tech/mobydick-core/TooltipBase/DescriptionText', () => {
    it('should renders correctly font', () => {
        const { toJSON } = (0, react_native_1.render)(<DescriptionText_1.default descriptionText={'descriptionText'} descriptionFont={'Regular-Primary-XS'} descriptionStyles={{ width: 200 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<DescriptionText_1.default descriptionText={'descriptionText'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
