"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const AutoLoopCarousel_1 = __importDefault(require("../AutoLoopCarousel"));
const styles_1 = require("../../../../styles");
const data = [
    { name: 'icon-starfill', id: '0' },
    { name: 'icon-starfill', id: '1' },
    { name: 'icon-starfill', id: '2' },
    { name: 'icon-starfill', id: '3' },
    { name: 'icon-starfill', id: '4' },
    { name: 'icon-starfill', id: '5' },
    { name: 'icon-starfill', id: '6' },
];
const sliderItem = (item) => <styles_1.SimpleIcon name={item.name}/>;
const itemWidth = 100;
describe('AutoLoopCarousel', () => {
    it('render AutoCarousel', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <AutoLoopCarousel_1.default data={data} sliderItem={sliderItem} sideMargin={20} itemWidth={itemWidth} isScrolling={true}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
});
