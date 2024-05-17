"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const types_1 = require("./types");
const placementArrow = (placement) => {
    switch (placement) {
        case types_1.IPlacement.start:
            return {
                left: 10,
            };
        case types_1.IPlacement.end:
            return {
                right: 10,
            };
        case types_1.IPlacement.center:
        default:
            return {
                alignSelf: 'center',
            };
    }
};
const Arrow = props => {
    const { arrowViewStyles, placement, position } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, position);
    return (<View_1.default style={[
            styles.arrow,
            arrowViewStyles,
            styles.positionStyle,
            placementArrow(placement),
        ]}/>);
};
exports.default = Arrow;
