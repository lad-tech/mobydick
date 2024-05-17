"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Typography_1 = require("../../../../typography/components/Typography/Typography");
const ListEmptySelector = ({ listEmptyText, listEmptyFont, }) => {
    const font = listEmptyFont ? listEmptyFont : 'Regular-Muted-M';
    const emptyText = listEmptyText
        ? listEmptyText
        : 'Данные недоступны. Повторите попытку позже.';
    return (<Typography_1.Typography font={font} style={{ paddingHorizontal: 12 }}>
      {emptyText}
    </Typography_1.Typography>);
};
exports.default = ListEmptySelector;
