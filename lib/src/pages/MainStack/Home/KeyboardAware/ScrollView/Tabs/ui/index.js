"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardAwareScrollViewTabsScreen = void 0;
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const KeyboardAwareScrollViewWithTabsScreen_1 = require("./KeyboardAwareScrollViewWithTabsScreen");
const KeyboardAwareScrollViewWithBottomAndTabsScreen_1 = require("./KeyboardAwareScrollViewWithBottomAndTabsScreen");
const screens_1 = require("@shared/lib/constants/screens");
const Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
const KeyboardAwareScrollViewTabsScreen = () => {
    return (<Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
      <Tab.Screen name={screens_1.SCREENS.KeyboardAwareScrollViewWithTabs} component={KeyboardAwareScrollViewWithTabsScreen_1.KeyboardAwareScrollViewWithTabsScreen}/>
      <Tab.Screen name={screens_1.SCREENS.KeyboardAwareScrollViewWithBottomAndTabs} component={KeyboardAwareScrollViewWithBottomAndTabsScreen_1.KeyboardAwareScrollViewWithBottomAndTabsScreen}/>
    </Tab.Navigator>);
};
exports.KeyboardAwareScrollViewTabsScreen = KeyboardAwareScrollViewTabsScreen;
