"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Typography_1 = require("../Typography");
describe('@lad-tech/mobydick-core/Typography', () => {
    it('renders default correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<Typography_1.Typography>My Text</Typography_1.Typography>);
        expect(toJSON()).toMatchSnapshot();
    });
});
