"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_stack_1 = require("@react-navigation/native-stack");
const native_1 = require("@react-navigation/native");
const screens_1 = require("@shared/lib/constants/screens");
const ui_1 = require("@shared/ui");
const navigationRef_1 = require("@shared/lib/navigationRef");
const useNavigationTheme_1 = require("@shared/lib/hooks/useNavigationTheme");
const ui_2 = __importDefault(require("@pages/MainStack/Settings/ui"));
const ui_3 = __importDefault(require("@pages/MainStack/Home/ui"));
const ui_4 = __importDefault(require("@pages/MainStack/Home/Calendar/ui"));
const ui_5 = __importDefault(require("@pages/MainStack/Home/Core/ui"));
const ui_6 = __importDefault(require("@pages/MainStack/Home/Utils/ui"));
const ui_7 = __importDefault(require("@pages/MainStack/Home/Core/Typography/ui"));
const ui_8 = __importDefault(require("@pages/MainStack/Home/Core/Inputs/ui"));
const ui_9 = __importDefault(require("@pages/MainStack/Home/Chart/ui"));
const ui_10 = __importDefault(require("@pages/MainStack/Home/Chart/LineChart/ui"));
const ui_11 = __importDefault(require("@pages/MainStack/Home/Chart/BarChart/ui"));
const ui_12 = __importDefault(require("@pages/MainStack/Home/Core/Progress/ui"));
const ui_13 = __importDefault(require("@pages/MainStack/Home/Core/Popup/ui"));
const ui_14 = __importDefault(require("@pages/MainStack/Home/Core/Chat/ui"));
const ui_15 = __importDefault(require("@pages/MainStack/Home/Core/Controls/ui"));
const ui_16 = __importDefault(require("@pages/MainStack/Home/Core/Styles/ui"));
const ui_17 = __importDefault(require("@pages/MainStack/Home/Core/CTA/ui"));
const ui_18 = __importDefault(require("@pages/MainStack/Home/KeyboardAware/ui"));
const KeyboardAwareScrollViewScreen_1 = require("@pages/MainStack/Home/KeyboardAware/ScrollView/ui/KeyboardAwareScrollViewScreen");
const KeyboardAwareScrollViewWithBottomScreen_1 = require("@pages/MainStack/Home/KeyboardAware/ScrollView/ui/KeyboardAwareScrollViewWithBottomScreen");
const ui_19 = require("@pages/MainStack/Home/KeyboardAware/ScrollView/Tabs/ui");
const ui_20 = __importDefault(require("@pages/MainStack/Home/Core/Other/ui"));
const ui_21 = __importDefault(require("@pages/MainStack/Home/Core/Navbars/ui"));
const ui_22 = __importDefault(require("@pages/MainStack/Home/Core/DragAndDrop/ui"));
const ui_23 = __importDefault(require("@pages/MainStack/Home/Markdown/ui"));
const Stack = (0, native_stack_1.createNativeStackNavigator)();
const MainStack = () => {
    const theme = (0, useNavigationTheme_1.useNavigationTheme)();
    return (<native_1.NavigationContainer ref={navigationRef_1.navigationRef} theme={theme}>
      <Stack.Navigator screenOptions={() => {
            return {
                headerRight: () => {
                    return (<ui_1.Button onPress={(0, navigationRef_1.move)(screens_1.SCREENS.Settings)} size={ui_1.IButtonSize.small} type={ui_1.IButtonTypes.tertiary} rightIcon={<ui_1.SimpleIcon name={'icon-settings'}/>}/>);
                },
            };
        }}>
        <Stack.Screen name={screens_1.SCREENS.Home} component={ui_3.default}/>
        <Stack.Screen name={screens_1.SCREENS.Settings} component={ui_2.default}/>

        <Stack.Group>
          <Stack.Screen name={screens_1.SCREENS.Core} component={ui_5.default}/>
          <Stack.Screen name={screens_1.SCREENS.Calendar} component={ui_4.default}/>
          <Stack.Screen name={screens_1.SCREENS.Utils} component={ui_6.default}/>
          <Stack.Screen name={screens_1.SCREENS.Chart} component={ui_9.default}/>
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name={screens_1.SCREENS.KeyboardAware} component={ui_18.default}/>
          <Stack.Screen name={screens_1.SCREENS.KeyboardAwareScrollView} component={KeyboardAwareScrollViewScreen_1.KeyboardAwareScrollViewScreen}/>

          <Stack.Screen name={screens_1.SCREENS.KeyboardAwareScrollViewWithBottom} component={KeyboardAwareScrollViewWithBottomScreen_1.KeyboardAwareScrollViewWithBottomScreen}/>
          <Stack.Screen name={screens_1.SCREENS.KeyboardAwareScrollViewTabs} component={ui_19.KeyboardAwareScrollViewTabsScreen}/>
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name={screens_1.SCREENS.Chat} component={ui_14.default}/>
          <Stack.Screen name={screens_1.SCREENS.Controls} component={ui_15.default}/>
          <Stack.Screen name={screens_1.SCREENS.CTA} component={ui_17.default}/>
          <Stack.Screen name={screens_1.SCREENS.Inputs} component={ui_8.default}/>
          <Stack.Screen name={screens_1.SCREENS.Popups} component={ui_13.default}/>
          <Stack.Screen name={screens_1.SCREENS.Progress} component={ui_12.default}/>
          <Stack.Screen name={screens_1.SCREENS.Styles} component={ui_16.default}/>
          <Stack.Screen name={screens_1.SCREENS.Typography} component={ui_7.default}/>
          <Stack.Screen name={screens_1.SCREENS.Other} component={ui_20.default}/>
          <Stack.Screen name={screens_1.SCREENS.Navbars} component={ui_21.default}/>
          <Stack.Screen name={screens_1.SCREENS.DragAndDrop} component={ui_22.default}/>
          <Stack.Screen name={screens_1.SCREENS.Markdown} component={ui_23.default}/>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name={screens_1.SCREENS.LineChart} component={ui_10.default}/>
          <Stack.Screen name={screens_1.SCREENS.BarChart} component={ui_11.default}/>
        </Stack.Group>
      </Stack.Navigator>
    </native_1.NavigationContainer>);
};
exports.default = MainStack;
