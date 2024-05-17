"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lib_1 = require("@shared/lib");
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const ExampleSearch = () => {
    const [styles] = (0, ui_1.useStyles)(styleSource);
    const [value, setValue] = (0, react_1.useState)('');
    const debouncedFn = (0, lib_1.useDebounce)((valueFn) => console.log('value', valueFn), 1000);
    const onChangeText = (text) => {
        setValue(text);
        debouncedFn(text);
    };
    return (<ui_1.View style={styles.wrapper}>
      <Header_1.default title={'Search:'}/>
      <ui_1.Search value={value} onChangeText={onChangeText} leftIcon={<ui_1.SimpleIcon name={'icon-search'}/>}/>
    </ui_1.View>);
};
const styleSource = (0, ui_1.createStyles)(({ spaces }) => ({
    wrapper: {
        gap: spaces.Space12,
    },
}));
exports.default = ExampleSearch;
