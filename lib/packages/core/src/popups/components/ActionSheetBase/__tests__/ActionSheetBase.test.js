"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ActionSheetBase_1 = __importDefault(require("../ActionSheetBase"));
const types_1 = require("../types");
describe('@lad-tech/mobydick-core/ActionSheetBase', () => {
    it('should renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ActionSheetBase_1.default id={'id'} onClose={() => null}>
        <></>
      </ActionSheetBase_1.default>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly with item', () => {
        const { toJSON } = (0, react_native_1.render)(<ActionSheetBase_1.default id={'id'} onClose={() => null}>
        <ActionSheetBase_1.default.Item textFont={'Regular-White-S'} itemType={types_1.IItemType.innerItem} title={'title'}/>
      </ActionSheetBase_1.default>);
        expect(toJSON()).toMatchSnapshot();
    });
});
