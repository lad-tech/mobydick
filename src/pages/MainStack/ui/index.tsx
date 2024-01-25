import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {SCREENS} from 'shared/lib/constants/screens';
import HomeScreen from 'pages/MainStack/Home/ui';
import SettingsScreen from 'pages/MainStack/Settings/ui';
import IRootStackParamList from 'shared/lib/constants/rootStackParamList';
import {Button, IButtonSize, IButtonTypes, SimpleIcon} from 'shared/ui';
import {move, navigationRef} from 'shared/lib/navigationRef';
import {useNavigationTheme} from 'shared/lib/hooks/useNavigationTheme';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
