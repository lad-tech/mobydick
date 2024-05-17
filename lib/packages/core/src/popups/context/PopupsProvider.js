"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const reducer_1 = require("../reducer");
const MobyDickPopup_1 = require("../MobyDickPopup");
const PopupsContext_1 = __importDefault(require("./PopupsContext"));
let popupId = 1;
const PopupsProvider = ({ children }) => {
    const [state, dispatch] = (0, react_1.useReducer)(reducer_1.reducer, reducer_1.defaultState);
    const openPopup = ({ Content, ...params }) => {
        const modalId = params.id || (popupId++).toString();
        dispatch((0, reducer_1.openPopupAction)({
            ...params,
            Content: Content,
            id: modalId,
        }));
        return modalId;
    };
    const closePopup = (id) => {
        dispatch((0, reducer_1.closePopupAction)(id));
    };
    const closeAllPopups = () => {
        dispatch((0, reducer_1.closeAllPopupsAction)());
    };
    const context = {
        popups: state.popups,
        openPopup,
        closePopup,
        closeAllPopups,
    };
    (0, react_1.useImperativeHandle)(MobyDickPopup_1.modalRef, () => ({
        openPopup,
        closePopup,
        closeAllPopups,
    }));
    return (<PopupsContext_1.default.Provider value={context}>
      {children}
      {state.popups.map(({ props, Content, id }) => {
            return (<Content key={id} id={id} {...props} onClose={() => {
                    props?.onClose && typeof props.onClose === 'function'
                        ? props?.onClose()
                        : closePopup(id);
                }}/>);
        })}
    </PopupsContext_1.default.Provider>);
};
exports.default = PopupsProvider;
