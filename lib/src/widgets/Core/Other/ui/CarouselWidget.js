"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const BlockView_1 = require("@shared/ui/BlockView");
const data = [1, 2, 3, 4, 5, 6];
const ITEM_WIDTH = px(80);
const CarouselWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.View style={styles.container}>
      <Header_1.default title={'Carousel'}/>
      <ui_1.Typography>Carousel</ui_1.Typography>
      <ui_1.Carousel data={data} sliderItem={item => <BlockView_1.BlockView item={item} width={ITEM_WIDTH}/>} itemWidth={ITEM_WIDTH} sideMargin={2} keyExtractor={item => item.toString()}/>
      <ui_1.Typography>LoopCarousel</ui_1.Typography>
      <ui_1.LoopCarousel data={data} sliderItem={item => <BlockView_1.BlockView item={item} width={ITEM_WIDTH}/>} itemWidth={ITEM_WIDTH} sideMargin={2}/>
      <ui_1.Typography>AutoCarousel</ui_1.Typography>
      <ui_1.AutoCarousel data={data} sliderItem={item => <BlockView_1.BlockView item={item} width={ITEM_WIDTH}/>} itemWidth={ITEM_WIDTH} sideMargin={2} keyExtractor={item => item.toString()}/>
      <ui_1.Typography>AutoLoopCarousel</ui_1.Typography>
      <ui_1.AutoLoopCarousel data={data} sliderItem={item => <BlockView_1.BlockView item={item} width={ITEM_WIDTH}/>} itemWidth={ITEM_WIDTH} sideMargin={2}/>
    </ui_1.View>);
};
exports.CarouselWidget = CarouselWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space16,
    },
}));
