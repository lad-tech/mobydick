"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ListEmptySelector_1 = __importDefault(require("../ListEmptySelector"));
describe('npm/mobydick-inputs/ListEmptySelector', () => {
    it('renders correctly with text and font', async () => {
        const { toJSON } = (0, react_native_1.render)(<ListEmptySelector_1.default listEmptyFont={'Regular-Error-L'} listEmptyText={'Ничего нет'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly without text and font', async () => {
        const { toJSON } = (0, react_native_1.render)(<ListEmptySelector_1.default />);
        expect(toJSON()).toMatchSnapshot();
    });
});
