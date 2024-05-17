"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const index_1 = require("../index");
describe('@lad-tech/mobydick-core/Indicator', () => {
    it('renders correctly with colors', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.Indicator percent={20}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
