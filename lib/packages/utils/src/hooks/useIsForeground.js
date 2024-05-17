"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const useIsForeground = () => {
    const [isForeground, setIsForeground] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const onChange = (state) => {
            setIsForeground(state === 'active');
        };
        const listener = react_native_1.AppState.addEventListener('change', onChange);
        return () => listener.remove();
    }, [setIsForeground]);
    return isForeground;
};
exports.default = useIsForeground;
