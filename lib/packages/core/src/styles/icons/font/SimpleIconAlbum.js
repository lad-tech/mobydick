"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pressable_1 = __importDefault(require("../../../basic/components/Pressable/Pressable"));
const FlatList_1 = __importDefault(require("../../../basic/components/FlatList/FlatList"));
const px_1 = __importDefault(require("../../utils/px"));
const SimpleIcon_1 = __importStar(require("./SimpleIcon"));
const renderItem = (onPress, color) => ({ item }) => {
    return (<Pressable_1.default testID={item} style={styles.item} key={item} onPress={() => onPress(item)}>
        <SimpleIcon_1.default key={item} name={item} size={(0, px_1.default)(20)} color={color}/>
      </Pressable_1.default>);
};
const keyExtractor = item => item;
const SimpleIconAlbum = ({ color, onPress, numColumns = 9, ...rest }) => {
    return (<FlatList_1.default {...rest} numColumns={numColumns} data={SimpleIcon_1.iconNames} renderItem={renderItem(onPress, color)} keyExtractor={keyExtractor}/>);
};
const styles = {
    item: {
        padding: (0, px_1.default)(10),
    },
};
exports.default = SimpleIconAlbum;
