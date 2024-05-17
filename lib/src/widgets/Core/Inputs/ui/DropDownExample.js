"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const ui_1 = require("@shared/ui");
const DropDownExample = () => {
    const [language, setLanguage] = (0, react_1.useState)();
    const [styles] = (0, ui_1.useStyles)(createStylesFn);
    const [programmingLanguages, setProgrammingLanguages] = (0, react_1.useState)([]);
    const languageList = [
        {
            value: 1,
            label: 'Russian',
        },
        {
            value: 2,
            label: 'English',
        },
        {
            value: 3,
            label: 'German',
        },
    ];
    const programmingLanguageList = [
        {
            value: 1,
            label: 'JavaScript',
        },
        {
            value: 2,
            label: 'Kotlin',
        },
        {
            value: 3,
            label: 'Swift',
        },
        {
            value: 4,
            label: 'Rust',
        },
        {
            value: 5,
            label: 'C++',
        },
        {
            value: 6,
            label: 'COBOL',
        },
    ];
    return (<>
      <Header_1.default title={'DropDown:'}/>

      <ui_1.DropDown isMultiselect title={'Select your favorite programming languages:'} selectedItem={programmingLanguages} placeholder={'Select language'} list={programmingLanguageList} onPress={setProgrammingLanguages} buttonStyle={styles.buttonStyle} flatListStyle={styles.flatListStyle}/>

      <ui_1.DropDown title={'Select language:'} selectedItem={language} placeholder={'Select language'} list={languageList} onPress={setLanguage} buttonStyle={styles.buttonStyle} flatListStyle={styles.flatListStyle}/>
    </>);
};
const createStylesFn = (0, ui_1.createStyles)(_ => ({
    buttonStyle: {
        width: '100%',
    },
    flatListStyle: {
        width: '95%',
    },
}));
exports.default = DropDownExample;
