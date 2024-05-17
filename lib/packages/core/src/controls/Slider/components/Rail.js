"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const stylesCreate_1 = __importDefault(require("../stylesCreate"));
const SelectedRail_1 = __importDefault(require("./SelectedRail"));
const Rail = ({ selectedRailStyle, thumbWidth, }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<View_1.default style={[styles.railsContainer, { marginHorizontal: thumbWidth / 2 }]}>
      <View_1.default style={styles.rail}/>
      <SelectedRail_1.default selectedRailStyle={selectedRailStyle}/>
    </View_1.default>);
};
exports.default = Rail;
