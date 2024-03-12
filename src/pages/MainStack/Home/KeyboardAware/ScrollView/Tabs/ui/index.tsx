import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IRootStackParamList from 'shared/lib/constants/rootStackParamList';
import {SCREENS} from 'shared/lib/constants/screens';
import {KeyboardAwareScrollViewWithTabsScreen} from 'pages/MainStack/Home/KeyboardAware/ScrollView/Tabs/ui/KeyboardAwareScrollViewWithTabsScreen';
import {KeyboardAwareScrollViewWithBottomAndTabsScreen} from 'pages/MainStack/Home/KeyboardAware/ScrollView/Tabs/ui/KeyboardAwareScrollViewWithBottomAndTabsScreen';

const Tab = createBottomTabNavigator<IRootStackParamList>();

export const KeyboardAwareScrollViewTabsScreen = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name={SCREENS.KeyboardAwareScrollViewWithTabs}
        component={KeyboardAwareScrollViewWithTabsScreen}
      />
      <Tab.Screen
        name={SCREENS.KeyboardAwareScrollViewWithBottomAndTabs}
        component={KeyboardAwareScrollViewWithBottomAndTabsScreen}
      />
    </Tab.Navigator>
  );
};
