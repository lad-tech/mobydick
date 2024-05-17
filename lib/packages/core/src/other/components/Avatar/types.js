"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBadgeTypes = exports.IStatusTypes = exports.IAvatarTypes = exports.IAvatarSize = void 0;
var IAvatarSize;
(function (IAvatarSize) {
    IAvatarSize["S"] = "S";
    IAvatarSize["M"] = "M";
    IAvatarSize["L"] = "L";
    IAvatarSize["XL"] = "XL";
})(IAvatarSize || (exports.IAvatarSize = IAvatarSize = {}));
var IAvatarTypes;
(function (IAvatarTypes) {
    IAvatarTypes["icon"] = "icon";
    IAvatarTypes["text"] = "text";
})(IAvatarTypes || (exports.IAvatarTypes = IAvatarTypes = {}));
var IStatusTypes;
(function (IStatusTypes) {
    IStatusTypes["star"] = "icon-starfill";
})(IStatusTypes || (exports.IStatusTypes = IStatusTypes = {}));
var IBadgeTypes;
(function (IBadgeTypes) {
    IBadgeTypes["indicator"] = "indicator";
    IBadgeTypes["counter"] = "counter";
    IBadgeTypes["status"] = "status";
})(IBadgeTypes || (exports.IBadgeTypes = IBadgeTypes = {}));
