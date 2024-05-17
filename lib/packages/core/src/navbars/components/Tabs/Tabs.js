"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const FlatList_1 = __importDefault(require("../../../basic/components/FlatList/FlatList"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Tab_1 = __importDefault(require("./Tab"));
const Tabs = (props) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const { list, activeValue, containerStyle, contentContainerStyle, ...otherProps } = props;
    const renderItem = (0, react_1.useCallback)(({ item }) => {
        return (<Tab_1.default item={item} active={Boolean(activeValue === item.value)} {...otherProps}/>);
    }, [activeValue, otherProps]);
    return (<View_1.default style={{ flexDirection: 'row' }}>
      <FlatList_1.default data={list} renderItem={renderItem} style={[styles.containerStyle, containerStyle]} showsHorizontalScrollIndicator={false} contentContainerStyle={[
            styles.contentContainerStyle,
            contentContainerStyle,
        ]} horizontal/>
    </View_1.default>);
};
exports.default = Tabs;
