"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDirection = exports.ISelectionState = exports.IButtonView = void 0;
var IButtonView;
(function (IButtonView) {
    IButtonView["small"] = "small";
    IButtonView["large"] = "large";
})(IButtonView || (exports.IButtonView = IButtonView = {}));
var ISelectionState;
(function (ISelectionState) {
    ISelectionState["days"] = "days";
    ISelectionState["months"] = "months";
    ISelectionState["years"] = "years";
})(ISelectionState || (exports.ISelectionState = ISelectionState = {}));
var IDirection;
(function (IDirection) {
    IDirection["right"] = "right";
    IDirection["left"] = "left";
    IDirection["none"] = "none";
})(IDirection || (exports.IDirection = IDirection = {}));
