"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ButtonWrapper_1 = __importDefault(require("../../../basic/components/Button/ButtonWrapper"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const PopupsProvider_1 = __importDefault(require("../../context/PopupsProvider"));
const MobyDickPopup_1 = __importDefault(require("../MobyDickPopup"));
const testIdPopup = 'testIdPopup';
const testIdOpenPopup = 'testIdOpenPopup';
const testIdCloseAllPopup = 'testIdCloseAllPopup';
const Popup = ({ onClose }) => {
    return (<ButtonWrapper_1.default testID={testIdPopup} onPress={onClose} title={'title'}/>);
};
const Example = () => {
    return (<View_1.default>
      <ButtonWrapper_1.default testID={testIdOpenPopup} onPress={() => {
            const id = MobyDickPopup_1.default.openPopup({
                Content: Popup,
                props: {
                    onClose: () => {
                        MobyDickPopup_1.default.closePopup(id);
                    },
                },
            });
        }} title={'title'}/>
      <ButtonWrapper_1.default testID={testIdCloseAllPopup} onPress={() => MobyDickPopup_1.default.closeAllPopups()} title={'title'}/>
    </View_1.default>);
};
describe('@lad-tech/mobydick-core/MobyDickPopup', () => {
    it('should renders correctly', async () => {
        const { toJSON, getByTestId } = (0, react_native_1.render)(<PopupsProvider_1.default>
        <Example />
      </PopupsProvider_1.default>);
        // Изначально попапа нет
        expect(toJSON()).toMatchSnapshot();
        // Вызвали openPopup и он появился
        react_native_1.fireEvent.press(getByTestId(testIdOpenPopup));
        expect(toJSON()).toMatchSnapshot();
        // Вызвали onClose у попапа и он пропал
        react_native_1.fireEvent.press(getByTestId(testIdPopup));
        expect(toJSON()).toMatchSnapshot();
        // Пооткрывали много папапов и они отприсовались норм
        react_native_1.fireEvent.press(getByTestId(testIdOpenPopup));
        react_native_1.fireEvent.press(getByTestId(testIdOpenPopup));
        expect(toJSON()).toMatchSnapshot();
        // Вызвали closeAllPopups и они все закрылись
        react_native_1.fireEvent.press(getByTestId(testIdCloseAllPopup));
        expect(toJSON()).toMatchSnapshot();
    });
});
