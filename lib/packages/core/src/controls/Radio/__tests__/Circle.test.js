"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_hooks_1 = require("@testing-library/react-hooks");
const Circle_1 = __importDefault(require("../Circle"));
const stylesCreate_1 = __importDefault(require("../stylesCreate"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
describe('@lad-tech/mobydick-core/Radio/Circle', () => {
    it('renders correctly', () => {
        const { result } = (0, react_hooks_1.renderHook)(() => (0, useStyles_1.default)(stylesCreate_1.default, false, false));
        const [styles] = result.current;
        const { toJSON } = (0, react_native_1.render)(<Circle_1.default innerStyle={styles.circle} outerStyle={styles.innerCircle}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly selected', () => {
        const { result } = (0, react_hooks_1.renderHook)(() => (0, useStyles_1.default)(stylesCreate_1.default, false, false));
        const [styles] = result.current;
        const { toJSON } = (0, react_native_1.render)(<Circle_1.default innerStyle={styles.circle} outerStyle={styles.innerCircle} selected/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
