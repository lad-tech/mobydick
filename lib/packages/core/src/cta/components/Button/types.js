"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IButtonSize = exports.IButtonTypes = void 0;
var IButtonTypes;
(function (IButtonTypes) {
    IButtonTypes["primary"] = "primary";
    IButtonTypes["secondary"] = "secondary";
    IButtonTypes["tertiary"] = "tertiary";
    IButtonTypes["disabled"] = "disabled";
    IButtonTypes["loading"] = "loading";
    IButtonTypes["destructive"] = "destructive";
})(IButtonTypes || (exports.IButtonTypes = IButtonTypes = {}));
var IButtonSize;
(function (IButtonSize) {
    IButtonSize["large"] = "large";
    IButtonSize["small"] = "small";
    IButtonSize["fixed"] = "fixed";
})(IButtonSize || (exports.IButtonSize = IButtonSize = {}));
