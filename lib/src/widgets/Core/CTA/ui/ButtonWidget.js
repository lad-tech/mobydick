"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const ButtonWidget = () => {
    const [styles] = (0, ui_1.useStyles)(style);
    const [counter, setCounter] = (0, react_1.useState)(99);
    const onChangeCounter = (value) => () => {
        setCounter(val => val + value);
    };
    return (<ui_1.View style={styles.container}>
      <Header_1.default title={'Type'}/>
      <ui_1.View style={styles.content}>
        <ui_1.Button type={ui_1.IButtonTypes.primary} text={'IButtonTypes.primary'}/>
        <ui_1.Button type={ui_1.IButtonTypes.secondary} text={'IButtonTypes.secondary'}/>
        <ui_1.Button type={ui_1.IButtonTypes.tertiary} text={'IButtonTypes.tertiary'}/>
        <ui_1.Button type={ui_1.IButtonTypes.loading} text={'IButtonTypes.loading'}/>
        <ui_1.Button type={ui_1.IButtonTypes.destructive} text={'IButtonTypes.destructive'}/>
        <ui_1.Button type={ui_1.IButtonTypes.disabled} text={'IButtonTypes.disabled'}/>
      </ui_1.View>

      <Header_1.default title={'Size'}/>
      <ui_1.View style={styles.content}>
        <ui_1.Button size={ui_1.IButtonSize.fixed} text={'IButtonSize.fixed'}/>
        <ui_1.Button size={ui_1.IButtonSize.large} text={'IButtonSize.large'}/>
        <ui_1.Button size={ui_1.IButtonSize.small} text={'IButtonSize.small'}/>
      </ui_1.View>

      <Header_1.default title={'Icons'}/>
      <ui_1.View style={styles.content}>
        <ui_1.Button text={'leftIcon'} leftIcon={<ui_1.SimpleIcon name={'icon-send'}/>}/>
        <ui_1.Button text={'rightIcon'} rightIcon={<ui_1.SimpleIcon name={'icon-send'}/>}/>
        <ui_1.Button text={'both'} leftIcon={<ui_1.SimpleIcon name={'icon-send'}/>} rightIcon={<ui_1.SimpleIcon name={'icon-send'}/>}/>
      </ui_1.View>

      <Header_1.default title={'State'}/>
      <ui_1.View style={styles.content}>
        <ui_1.Button text={'loading'} loading={true}/>
        <ui_1.Button text={'disabled'} disabled={true}/>
        <ui_1.Button text={'both'} disabled={true} loading={true}/>
      </ui_1.View>

      <Header_1.default title={'Counter'}/>
      <ui_1.View style={styles.content}>
        <ui_1.Button text={'increment'} count={counter} onPress={onChangeCounter(1)}/>
        <ui_1.Button text={'decrement'} count={counter} onPress={onChangeCounter(-1)}/>
      </ui_1.View>
    </ui_1.View>);
};
exports.ButtonWidget = ButtonWidget;
const style = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space4,
    },
    content: {
        alignItems: 'center',
        gap: spaces.Space4,
    },
}));
