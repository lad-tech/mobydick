"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const Selector_1 = __importDefault(require("../Selector"));
const getDropDownDimensions = __importStar(require("../../utils/getDropDownDimensions"));
describe('@lad-tech/mobydick-core/Selector', () => {
    const list = [{ label: 'list', value: 'list' }];
    const renderItemOnPress = jest.fn();
    const largeList = [
        { label: '1', value: '1' },
        { label: '1', value: '1' },
        { label: '1', value: '1' },
        { label: '1', value: '1' },
        { label: '1', value: '1' },
        { label: '1', value: '1' },
        { label: '1', value: '1' },
    ];
    const selectedItem = list[0]?.value;
    it('renders correctly', async () => {
        const inputList = [{ label: 'list', value: 'list' }];
        const { toJSON, findByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Selector_1.default list={[...inputList]} selectedItem={list[1]?.value} onClose={jest.fn()} pageY={1} renderItemOnPress={renderItemOnPress} dropDownHeight={80}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
        const item = await findByLabelText(inputList[0].label);
        react_native_1.fireEvent.press(item);
        expect(renderItemOnPress).toHaveBeenCalledWith(inputList[0]);
    });
    it('renders correctly with bottom padding largeList', async () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Selector_1.default list={largeList} onClose={jest.fn()} pageY={1} selectedItem={largeList[1]?.value} renderItemOnPress={renderItemOnPress} dropDownHeight={80}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render correct renderItem TouchableHighlight with custom style', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Selector_1.default list={list} onClose={jest.fn()} pageY={1} renderItemOnPress={renderItemOnPress} flatListItemStyle={{ height: 10 }} selectedItem={selectedItem} selectedItemColor={'red'} dropDownHeight={80}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render correct renderItem Typography with custom style', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Selector_1.default list={list} selectedItem={selectedItem} onClose={jest.fn()} pageY={1} renderItemOnPress={renderItemOnPress} flatListTextStylePressed={{ backgroundColor: 'red' }} dropDownHeight={80}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render correct renderItem Typography  with custom font', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Selector_1.default list={list} onClose={jest.fn()} pageY={1} renderItemOnPress={renderItemOnPress} selectedItem={selectedItem} flatListTextFontPressed={'Bold-Error-L'} dropDownHeight={80}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('How props Selector affect getDropDownDimensions', () => {
        const spy = jest.spyOn(getDropDownDimensions, 'getDropDownDimensions');
        (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Selector_1.default list={list} onClose={jest.fn()} pageY={1} renderItemOnPress={renderItemOnPress} selectedItem={selectedItem} flatListStyle={{ paddingVertical: 2 }} dropDownHeight={72}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(spy).toHaveBeenLastCalledWith({
            dropDownBorderWidth: 1.5,
            dropDownHeight: 72,
            height: 640,
            navBarHeight: 50,
            pageY: 1,
            listLength: 1,
        });
    });
    it('Selector custom flatList styles', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Selector_1.default list={list} onClose={jest.fn()} pageY={1} renderItemOnPress={renderItemOnPress} selectedItem={selectedItem} flatListStyle={{ width: 2 }} buttonStyle={{ borderWidth: 1 }} dropDownHeight={72}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('Selector custom with array in selectedItem', () => {
        const data = [
            { label: 'JavaScript', value: 1 },
            { label: 'Rust', value: 2 },
        ];
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Selector_1.default list={data} onClose={jest.fn()} pageY={1} renderItemOnPress={renderItemOnPress} selectedItem={[data[0]]} dropDownHeight={72}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('Selector custom with empty array in selectedItem', () => {
        const data = [
            { label: 'JavaScript', value: 1 },
            { label: 'Rust', value: 2 },
        ];
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Selector_1.default list={data} onClose={jest.fn()} pageY={1} renderItemOnPress={renderItemOnPress} selectedItem={[]} dropDownHeight={72}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
});
