"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Item_1 = __importDefault(require("../Item"));
const types_1 = require("../types");
const SimpleIcon_1 = __importDefault(require("../../../../styles/icons/font/SimpleIcon"));
const other_1 = require("../../../../other");
describe('@lad-tech/mobydick-core/ActionSheetBase', () => {
    it('should renders correctly Item', () => {
        const { toJSON } = (0, react_native_1.render)(<Item_1.default title={'title'} itemType={types_1.IItemType.cancelItem}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly Item with  textFont', () => {
        const { toJSON } = (0, react_native_1.render)(<Item_1.default textFont={'Regular-White-S'} itemType={types_1.IItemType.firstItem} title={'title'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly inner item', () => {
        const { toJSON } = (0, react_native_1.render)(<Item_1.default textFont={'Regular-White-S'} itemType={types_1.IItemType.innerItem} title={'title'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly Item with !selected', () => {
        const { toJSON } = (0, react_native_1.render)(<Item_1.default itemType={types_1.IItemType.lastItem} radio={'selected'} onPress={() => null} textFont={'Regular-White-S'} title={'title'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly Item with selected', () => {
        const { toJSON } = (0, react_native_1.render)(<Item_1.default itemType={types_1.IItemType.singleItem} checkboxList={['title']} onPress={() => null} title={'title'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly Item with disabled', () => {
        const { toJSON } = (0, react_native_1.render)(<Item_1.default disabled={true} itemType={types_1.IItemType.cancelItem} title={'title'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('should renders correctly Item with leftIcon', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Item_1.default itemType={types_1.IItemType.cancelItem} title={'title'} leftIcon={<SimpleIcon_1.default name={'icon-copy'}/>}/>);
        const pressableItem = getByLabelText(other_1.LABELS.actionSheetsItem);
        react_native_1.fireEvent.press(pressableItem);
        expect(toJSON()).toMatchSnapshot();
    });
});
