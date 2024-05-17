"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const chart_1 = require("@shared/lib/test/data/chart");
const RenderSectionItem_1 = __importDefault(require("@widgets/Chart/ui/RenderSectionItem"));
const RenderHeader_1 = __importDefault(require("@widgets/Chart/ui/RenderHeader"));
const renderSectionItem = ({ period, transition, state }, index) => (<RenderSectionItem_1.default period={period} state={state} transition={transition} index={index}/>);
const renderHeader = headerData => (<RenderHeader_1.default header={headerData}/>);
const BarChartScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.View style={styles.container}>
      <ui_1.BarChart dataset={chart_1.mockChartDataset} renderHeader={renderHeader} renderSectionItem={renderSectionItem}/>
    </ui_1.View>);
};
exports.default = BarChartScreen;
