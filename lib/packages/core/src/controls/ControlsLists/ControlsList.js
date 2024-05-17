"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../basic/components/View/View"));
const useCloneControls_1 = __importDefault(require("./useCloneControls"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const ControlsList = ({ single = false, horizontal = false, onChange, disabled = false, children, values, listStyles, }) => {
    const { radios } = (0, useCloneControls_1.default)(children, values, onChange, single, disabled);
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, horizontal);
    return <View_1.default style={[styles.list, listStyles]}>{radios}</View_1.default>;
};
exports.default = ControlsList;
