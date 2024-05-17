"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../components/Button/types");
const other_1 = require("../../other");
const getCounterType = (type) => {
    switch (type) {
        case types_1.IButtonTypes.secondary:
            return other_1.ICounterTypes.accentLight;
        case types_1.IButtonTypes.tertiary:
            return other_1.ICounterTypes.accent;
        case types_1.IButtonTypes.disabled:
            return other_1.ICounterTypes.mutedLight;
        case types_1.IButtonTypes.destructive:
            return other_1.ICounterTypes.attentionLight;
        case types_1.IButtonTypes.primary:
        default:
            return other_1.ICounterTypes.accentLight;
    }
};
exports.default = getCounterType;
