"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const FlatList_1 = __importDefault(require("../FlatList"));
const Text_1 = __importDefault(require("../../Text/Text"));
describe('@lad-tech/mobydick-core/FlatList', () => {
    it('renders correctly', () => {
        const renderItem = ({ item }) => {
            return <Text_1.default>{item}</Text_1.default>;
        };
        const { toJSON } = (0, react_native_1.render)(<FlatList_1.default data={['1', '2', '3']} renderItem={renderItem} keyExtractor={(item, index) => item.toString() + index.toString()}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});
