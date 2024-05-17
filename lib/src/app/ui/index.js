"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const ui_1 = require("@shared/ui");
const ui_2 = __importDefault(require("@pages/MainStack/ui"));
exports.default = () => {
    return (<react_native_safe_area_context_1.SafeAreaProvider>
      <react_native_gesture_handler_1.GestureHandlerRootView style={{ flex: 1 }}>
        <ui_1.ThemeProvider>
          <ui_1.PopupsProvider>
            <ui_2.default />
          </ui_1.PopupsProvider>
        </ui_1.ThemeProvider>
      </react_native_gesture_handler_1.GestureHandlerRootView>
    </react_native_safe_area_context_1.SafeAreaProvider>);
};
