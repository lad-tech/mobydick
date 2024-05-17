"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const ui_1 = require("@shared/ui");
const Verification = () => {
    const [styles] = (0, ui_1.useStyles)(styleSource);
    const input0 = (0, react_1.useRef)(null);
    const input1 = (0, react_1.useRef)(null);
    const input2 = (0, react_1.useRef)(null);
    const input3 = (0, react_1.useRef)(null);
    const [char0, writeChar0] = (0, react_1.useState)('');
    const [char1, writeChar1] = (0, react_1.useState)('');
    const [char2, writeChar2] = (0, react_1.useState)('');
    const [char3, writeChar3] = (0, react_1.useState)('');
    const onLayout = (0, react_1.useCallback)(() => input0?.current?.focus(), []);
    const onChangeText0 = (0, react_1.useCallback)((text) => {
        writeChar0(text);
        text.length && input1.current?.focus();
    }, []);
    const onBackKeyPress0 = (0, react_1.useCallback)(() => {
        if (char0 === '') {
            react_native_1.Keyboard.dismiss();
        }
    }, [char0]);
    const onChangeText1 = (0, react_1.useCallback)((text) => {
        writeChar1(text);
        text.length && input2.current?.focus();
    }, []);
    const onBackKeyPress1 = (0, react_1.useCallback)(() => {
        if (char1 === '') {
            input0.current?.focus();
        }
    }, [char1]);
    const onChangeText2 = (0, react_1.useCallback)((text) => {
        writeChar2(text);
        text.length && input3.current?.focus();
    }, []);
    const onBackKeyPress2 = (0, react_1.useCallback)(() => {
        if (char2 === '') {
            input1.current?.focus();
        }
    }, [char2]);
    const onChangeText3 = (0, react_1.useCallback)((text) => {
        writeChar3(text);
        text.length && react_native_1.Keyboard.dismiss();
    }, []);
    const onBackKeyPress3 = (0, react_1.useCallback)(() => {
        if (char3 === '') {
            input2.current?.focus();
        }
    }, [char3]);
    return (<ui_1.View style={styles.wrapper}>
      <Header_1.default title={'CodeField:'}/>
      <ui_1.View style={styles.container} onLayout={onLayout}>
        <ui_1.CodeField value={char0} ref={input0} onChangeText={onChangeText0} onBackKeyPress={onBackKeyPress0} textInputContainerStyle={styles.textInputContainerStyle} selection={{ start: char0.length, end: char0.length }}/>
        <ui_1.CodeField value={char1} ref={input1} onChangeText={onChangeText1} onBackKeyPress={onBackKeyPress1} selection={{ start: char1.length, end: char1.length }}/>
        <ui_1.View style={styles.borderStyle}/>
        <ui_1.CodeField value={char2} ref={input2} onChangeText={onChangeText2} onBackKeyPress={onBackKeyPress2} textInputContainerStyle={styles.textInputContainerStyle} selection={{ start: char2.length, end: char2.length }}/>
        <ui_1.CodeField value={char3} ref={input3} onChangeText={onChangeText3} onBackKeyPress={onBackKeyPress3} selection={{ start: char3.length, end: char3.length }}/>
      </ui_1.View>
    </ui_1.View>);
};
const styleSource = (0, ui_1.createStyles)(theme => {
    const { colors, spaces } = theme;
    return {
        wrapper: {
            gap: spaces.Space12,
        },
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: spaces.Space12,
        },
        textInputContainerStyle: {
            marginRight: spaces.Space12,
        },
        borderStyle: {
            width: spaces.Space16,
            height: spaces.Space2,
            backgroundColor: colors.BorderNormal,
            marginHorizontal: spaces.Space6,
        },
    };
});
exports.default = Verification;
