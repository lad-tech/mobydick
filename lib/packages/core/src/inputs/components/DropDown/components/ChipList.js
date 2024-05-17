"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createStyles_1 = __importDefault(require("../../../../styles/utils/createStyles"));
const useStyles_1 = __importDefault(require("../../../../styles/hooks/useStyles"));
const basic_1 = require("../../../../basic");
const Chip_1 = __importDefault(require("./Chip"));
function ChipList({ selectedItem, onChange, }) {
    const [styles] = (0, useStyles_1.default)(styleSource);
    const handleDelete = (item) => () => {
        onChange?.(item);
    };
    return (<basic_1.View style={styles.contentContainerStyle}>
      {selectedItem?.map(item => (<Chip_1.default key={item.value} text={item.label} onPress={handleDelete(item)}/>))}
    </basic_1.View>);
}
const styleSource = (0, createStyles_1.default)(({ spaces }) => ({
    contentContainerStyle: {
        gap: spaces.Space8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
}));
exports.default = ChipList;
