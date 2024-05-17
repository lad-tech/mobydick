"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DropDownExample_1 = __importDefault(require("./DropDownExample"));
const Verification_1 = __importDefault(require("./Verification"));
const ExampleSearch_1 = __importDefault(require("./ExampleSearch"));
const InputList_1 = __importDefault(require("./InputList"));
const InputsWidget = () => {
    return (<>
      <InputList_1.default />
      <DropDownExample_1.default />
      <Verification_1.default />
      <ExampleSearch_1.default />
    </>);
};
exports.default = InputsWidget;
