"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goBack = exports.replace = exports.popToTop = exports.pop = exports.push = exports.navigate = exports.move = exports.navigationRef = void 0;
const native_1 = require("@react-navigation/native");
exports.navigationRef = (0, native_1.createNavigationContainerRef)();
const move = (...args) => () => {
    push(...args);
};
exports.move = move;
function navigate(...args) {
    if (exports.navigationRef.isReady() && exports.navigationRef.current) {
        exports.navigationRef.current.navigate(...args);
    }
}
exports.navigate = navigate;
function push(...args) {
    if (exports.navigationRef.isReady() && exports.navigationRef.current) {
        // It's okay to pass args like that for better func usage
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        exports.navigationRef.current.dispatch(native_1.StackActions.push(...args));
    }
}
exports.push = push;
function pop(count) {
    if (exports.navigationRef.isReady() && exports.navigationRef.current) {
        exports.navigationRef.current.dispatch(native_1.StackActions.pop(count));
    }
}
exports.pop = pop;
function popToTop() {
    if (exports.navigationRef.isReady() && exports.navigationRef.current) {
        exports.navigationRef.current.dispatch(native_1.StackActions.popToTop());
    }
}
exports.popToTop = popToTop;
function replace(...args) {
    if (exports.navigationRef.isReady() && exports.navigationRef.current) {
        // It's okay to pass args like that for better func usage
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        exports.navigationRef.current.dispatch(native_1.StackActions.replace(...args));
    }
}
exports.replace = replace;
function goBack() {
    if (exports.navigationRef.isReady() && exports.navigationRef.current) {
        exports.navigationRef.current.goBack();
    }
}
exports.goBack = goBack;
