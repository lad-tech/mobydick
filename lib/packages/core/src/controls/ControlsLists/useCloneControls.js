"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useCloneControls = (controls, values, onChange, single = false, disabled = false) => {
    const radios = controls.map((radio) => {
        const value = radio.props.value;
        const selected = values.some(e => e === value);
        return (0, react_1.cloneElement)(radio, {
            key: value,
            selected,
            disabled,
            onPress: () => {
                let data = [...values];
                if (single) {
                    data = [value];
                }
                else {
                    if (selected) {
                        data = data.filter(e => e !== value);
                    }
                    else {
                        data = [...data, value];
                    }
                }
                onChange(data);
            },
        });
    });
    return { values, radios };
};
exports.default = useCloneControls;
