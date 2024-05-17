"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const StatusDot_1 = __importDefault(require("./components/StatusDot"));
const StatusTag_1 = __importDefault(require("./components/StatusTag"));
const Status = (props) => {
    const { type, state, style } = props;
    return type === types_1.IStatusType.dot ? (<StatusDot_1.default state={state} style={style}/>) : (<StatusTag_1.default state={state} text={props.text} style={style}/>);
};
exports.default = Status;
