"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const index_1 = require("../index");
const types_1 = require("../types");
describe('@lad-tech/mobydick-core/Spinner', () => {
    it('renders correctly S', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.Spinner />);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly M', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.Spinner size={types_1.ISizeSpinner.M}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly L', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.Spinner size={types_1.ISizeSpinner.L}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
