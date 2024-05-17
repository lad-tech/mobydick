"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const Header = ({ title }) => {
    return <ui_1.Typography font={'Regular-Primary-H5'}>{title}</ui_1.Typography>;
};
exports.default = Header;
