"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const react_1 = __importDefault(require("react"));
const DropDown_1 = __importDefault(require("../DropDown"));
const types_1 = require("../../types");
const PopupsProvider_1 = __importDefault(require("../../../../popups/context/PopupsProvider"));
const SimpleIcon_1 = __importDefault(require("../../../../styles/icons/font/SimpleIcon"));
const constants_1 = __importDefault(require("../../../../popups/components/PopupBase/constants"));
const other_1 = require("../../../../other");
const basic_1 = require("../../../../basic");
describe('@lad-tech/mobydick-core/DropDown', () => {
    let viewRef;
    beforeEach(() => {
        viewRef = react_1.default.createRef();
        (0, react_native_1.render)(<basic_1.Pressable ref={viewRef}/>);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    const list = [
        { label: 'Русский', value: 'Русский' },
        { label: 'English', value: 'English' },
    ];
    it('renders correctly 10 elements', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default selectedItem={list[1]?.value} placeholder={'Выберите язык'} title={'Название поля'} list={list} onPress={jest.fn()} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('selectItem', async () => {
        const onPress = jest.fn();
        jest
            .spyOn(viewRef.current, 'measure')
            .mockImplementation((cb) => cb(0, 0, 1, 1, 287, 2410));
        const { getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default placeholder={'Выберите язык'} title={'Название поля'} list={list} onPress={onPress} type={types_1.IInputsTypes.disabled} selectedItem={list[1]?.label} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const pressable = getByLabelText(other_1.LABELS.selector);
        react_native_1.fireEvent.press(pressable);
        const pressableSelect = getByLabelText(list[1].label);
        react_native_1.fireEvent.press(pressableSelect);
        expect(onPress).toHaveBeenCalledWith(list[1]?.value);
    });
    it('selectItemClose', async () => {
        const onPress = jest.fn();
        const useRefSpy = jest
            .spyOn(viewRef.current, 'measure')
            .mockImplementation((cb) => cb(0, 0, 1, 1, 287, 2410));
        const { getByLabelText, toJSON, getByTestId } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default selectedItem={list[1]?.value} placeholder={'Выберите язык'} title={'Название поля'} list={list} onPress={onPress} subtitle={'subtitle'} subtitleIcon={'icon-account'} buttonStyle={{
                width: 400,
                height: 70,
                borderColor: '#000',
                backgroundColor: '#000',
            }} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const pressable = getByLabelText(other_1.LABELS.selector);
        react_native_1.fireEvent.press(pressable);
        const pressableClose = getByTestId(constants_1.default.testID);
        const copyTarget = 'copyTarget';
        react_native_1.fireEvent.press(pressableClose, {
            target: copyTarget,
            currentTarget: copyTarget,
        });
        expect(toJSON()).toMatchSnapshot();
        expect(useRefSpy).toHaveBeenCalledTimes(1);
    });
    it('renders correctly 10 elements type wrong', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default selectedItem={list[1]?.value} placeholder={'Выберите язык'} title={'Название поля'} list={list} onPress={jest.fn()} type={types_1.IInputsTypes.wrong} titleFont={'Medium-Tertiary-XS'} titleStyle={{ paddingBottom: 8 }} buttonStyle={{
                width: 400,
                height: 70,
                borderColor: '#000',
                backgroundColor: '#000',
            }} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly 10 elements type valid', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default selectedItem={list[1]?.value} placeholder={'Выберите язык'} title={'Название поля'} list={list} onPress={jest.fn()} type={types_1.IInputsTypes.valid} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly 10 elements disabled', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default selectedItem={undefined} placeholder={'Выберите язык'} title={'Название поля'} list={list} onPress={jest.fn()} disabled={true} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly without array', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default selectedItem={undefined} placeholder={'Выберите язык'} title={'Название поля'} required={false} list={[]} onPress={jest.fn()} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly without array with text and font', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default selectedItem={undefined} placeholder={'Выберите язык'} title={'Название поля'} required={true} listEmptyFont={'Regular-Error-L'} listEmptyText={'Ничего нет'} list={[]} onPress={jest.fn()} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('multiselect snapshot', async () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default isMultiselect placeholder={'Выберите язык'} title={'Название поля'} list={list} onPress={jest.fn()} selectedItem={[list[1]]} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('multiselect', async () => {
        const onPress = jest.fn();
        jest
            .spyOn(viewRef.current, 'measure')
            .mockImplementation((cb) => cb(0, 0, 1, 1, 287, 2410));
        const { getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <PopupsProvider_1.default>
          <DropDown_1.default isMultiselect placeholder={'Выберите язык'} title={'Название поля'} list={list} onPress={onPress} type={types_1.IInputsTypes.disabled} selectedItem={[]} rightIcon={<SimpleIcon_1.default name={'icon-arrow-down'}/>}/>
        </PopupsProvider_1.default>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const pressable = getByLabelText(other_1.LABELS.selector);
        react_native_1.fireEvent.press(pressable);
        const pressableSelect = getByLabelText(list[1].label);
        react_native_1.fireEvent.press(pressableSelect);
        expect(onPress).toHaveBeenCalledWith([list[1]]);
    });
});
