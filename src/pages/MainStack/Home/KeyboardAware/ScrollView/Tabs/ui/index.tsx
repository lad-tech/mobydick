import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {KeyboardAwareScrollViewWithTabsScreen} from './KeyboardAwareScrollViewWithTabsScreen';
import {KeyboardAwareScrollViewWithBottomAndTabsScreen} from './KeyboardAwareScrollViewWithBottomAndTabsScreen';

import IRootStackParamList from 'shared/lib/constants/rootStackParamList';
import {SCREENS} from 'shared/lib/constants/screens';

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
