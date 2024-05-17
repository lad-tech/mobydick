"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const index_1 = require("../index");
describe('@lad-tech/mobydick-core/PanelSpinner', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelSpinner isLoading/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly canceled', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelSpinner isLoading onCancel={() => {
                console.log('renders correctly canceled');
            }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly done', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelSpinner isLoading={false}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly error', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelSpinner isLoading={false} isError={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
