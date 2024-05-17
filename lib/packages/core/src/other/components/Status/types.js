"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStatusState = exports.IStatusType = void 0;
var IStatusType;
(function (IStatusType) {
    IStatusType["dot"] = "dot";
    IStatusType["tag"] = "tag";
})(IStatusType || (exports.IStatusType = IStatusType = {}));
var IStatusState;
(function (IStatusState) {
    IStatusState["green"] = "green";
    IStatusState["orange"] = "orange";
    IStatusState["red"] = "red";
    IStatusState["blue"] = "blue";
    IStatusState["gray"] = "gray";
})(IStatusState || (exports.IStatusState = IStatusState = {}));
