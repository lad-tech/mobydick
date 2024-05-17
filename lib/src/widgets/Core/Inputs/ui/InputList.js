"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const ui_1 = require("@shared/ui");
const InputList = () => {
    const [styles] = (0, ui_1.useStyles)(styleSource);
    const [about, setAbout] = (0, react_1.useState)('');
    const [isSecureTextEntry, setSecureTextEntry] = (0, react_1.useState)(false);
    return (<ui_1.View style={styles.containerStyle}>
      <Header_1.default title={'Inputs:'}/>

      <ui_1.InputField type={ui_1.IInputsTypes.default} title={'Login'} placeholder={'login'} required={true}/>

      <ui_1.InputField type={ui_1.IInputsTypes.valid} title={'Password'} placeholder={'password'} rightIcon={<ui_1.Pressable onPress={() => setSecureTextEntry(!isSecureTextEntry)}>
            <ui_1.SimpleIcon name={isSecureTextEntry ? 'icon-show' : 'icon-hide'}/>
          </ui_1.Pressable>} secureTextEntry={isSecureTextEntry} required={true}/>

      <ui_1.InputField type={ui_1.IInputsTypes.wrong} title={'Title'} subtitle={'Error text'}/>

      <ui_1.InputField type={ui_1.IInputsTypes.disabled} title={'Disabled field'} disabled={true} subtitle={'Subtitle'}/>

      <ui_1.InputField type={ui_1.IInputsTypes.default} title={'About:'} placeholder={'Write something'} multiline={true} value={about} onChangeText={setAbout}/>
    </ui_1.View>);
};
const styleSource = (0, ui_1.createStyles)(({ spaces }) => ({
    containerStyle: {
        gap: spaces.Space12,
    },
}));
exports.default = InputList;
