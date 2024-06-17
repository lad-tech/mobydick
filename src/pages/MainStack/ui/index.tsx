import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {SCREENS} from '@shared/lib/constants/screens';
import IRootStackParamList from '@shared/lib/constants/rootStackParamList';
import {Button, IButtonSize, IButtonTypes, SimpleIcon} from '@shared/ui';
import {move, navigationRef} from '@shared/lib/navigationRef';
import {useNavigationTheme} from '@shared/lib/hooks/useNavigationTheme';
import SettingsScreen from '@pages/MainStack/Settings/ui';
import HomeScreen from '@pages/MainStack/Home/ui';
import CalendarScreen from '@pages/MainStack/Home/Calendar/ui';
import CoreScreen from '@pages/MainStack/Home/Core/ui';
import UtilsScreen from '@pages/MainStack/Home/Utils/ui';
import InputsScreen from '@pages/MainStack/Home/Core/Inputs/ui';
import ChartScreen from '@pages/MainStack/Home/Chart/ui';
import LineChartScreen from '@pages/MainStack/Home/Chart/LineChart/ui';
import BarChartScreen from '@pages/MainStack/Home/Chart/BarChart/ui';
import ProgressScreen from '@pages/MainStack/Home/Core/Progress/ui';
import PopupScreen from '@pages/MainStack/Home/Core/Popup/ui';
import ChatScreen from '@pages/MainStack/Home/Core/Chat/ui';
import ControlsScreen from '@pages/MainStack/Home/Core/Controls/ui';
import StylesScreen from '@pages/MainStack/Home/Core/Styles/ui';
import CTAScreen from '@pages/MainStack/Home/Core/CTA/ui';
import KeyboardAwareScreen from '@pages/MainStack/Home/KeyboardAware/ui';
import {KeyboardAwareScrollViewScreen} from '@pages/MainStack/Home/KeyboardAware/ScrollView/ui/KeyboardAwareScrollViewScreen';
import {KeyboardAwareScrollViewWithBottomScreen} from '@pages/MainStack/Home/KeyboardAware/ScrollView/ui/KeyboardAwareScrollViewWithBottomScreen';
import {KeyboardAwareScrollViewTabsScreen} from '@pages/MainStack/Home/KeyboardAware/ScrollView/Tabs/ui';
import OtherScreen from '@pages/MainStack/Home/Core/Other/ui';
import NavbarsScreen from '@pages/MainStack/Home/Core/Navbars/ui';
import DragAndDropScreen from '@pages/MainStack/Home/Core/DragAndDrop/ui';
import MarkdownScreen from '@pages/MainStack/Home/Markdown/ui';
import TypographyScreen from '@pages/MainStack/Home/Core/Typography/Typography/ui';
import TitleScreen from '@pages/MainStack/Home/Core/Typography/Title/ui';
import TypographyLegacyScreen from '@pages/MainStack/Home/Core/Typography/TypographyLegacy';
import TypographyAllScreen from '@pages/MainStack/Home/Core/Typography/ui';

const Stack = createNativeStackNavigator<IRootStackParamList>();

const MainStack = () => {
  const theme = useNavigationTheme();

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator
        screenOptions={() => {
          return {
            headerRight: () => {
              return (
                <Button
                  onPress={move(SCREENS.Settings)}
                  size={IButtonSize.small}
                  type={IButtonTypes.tertiary}
                  rightIcon={<SimpleIcon name={'icon-settings'} />}
                />
              );
            },
          };
        }}>
        <Stack.Screen name={SCREENS.Home} component={HomeScreen} />
        <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} />

        <Stack.Group>
          <Stack.Screen name={SCREENS.Core} component={CoreScreen} />
          <Stack.Screen name={SCREENS.Calendar} component={CalendarScreen} />
          <Stack.Screen name={SCREENS.Utils} component={UtilsScreen} />
          <Stack.Screen name={SCREENS.Chart} component={ChartScreen} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name={SCREENS.KeyboardAware}
            component={KeyboardAwareScreen}
          />
          <Stack.Screen
            name={SCREENS.KeyboardAwareScrollView}
            component={KeyboardAwareScrollViewScreen}
          />

          <Stack.Screen
            name={SCREENS.KeyboardAwareScrollViewWithBottom}
            component={KeyboardAwareScrollViewWithBottomScreen}
          />
          <Stack.Screen
            name={SCREENS.KeyboardAwareScrollViewTabs}
            component={KeyboardAwareScrollViewTabsScreen}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name={SCREENS.Chat} component={ChatScreen} />
          <Stack.Screen name={SCREENS.Controls} component={ControlsScreen} />
          <Stack.Screen name={SCREENS.CTA} component={CTAScreen} />
          <Stack.Screen name={SCREENS.Inputs} component={InputsScreen} />
          <Stack.Screen name={SCREENS.Popups} component={PopupScreen} />
          <Stack.Screen name={SCREENS.Progress} component={ProgressScreen} />
          <Stack.Screen name={SCREENS.Styles} component={StylesScreen} />
          <Stack.Screen
            name={SCREENS.TypographyAll}
            component={TypographyAllScreen}
          />
          <Stack.Screen
            name={SCREENS.TypographyLegacy}
            component={TypographyLegacyScreen}
          />
          <Stack.Screen name={SCREENS.Title} component={TitleScreen} />
          <Stack.Screen
            name={SCREENS.Typography}
            component={TypographyScreen}
          />
          <Stack.Screen name={SCREENS.Other} component={OtherScreen} />
          <Stack.Screen name={SCREENS.Navbars} component={NavbarsScreen} />
          <Stack.Screen
            name={SCREENS.DragAndDrop}
            component={DragAndDropScreen}
          />
          <Stack.Screen name={SCREENS.Markdown} component={MarkdownScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name={SCREENS.LineChart} component={LineChartScreen} />
          <Stack.Screen name={SCREENS.BarChart} component={BarChartScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
