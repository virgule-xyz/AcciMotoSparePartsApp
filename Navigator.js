import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Screen1 from '@screens/Screen1';
import Screen2 from '@screens/Screen2';
import Screen3 from '@screens/Screen3';
import Screen4 from '@screens/Screen4';
import Screen5 from '@screens/Screen5';

/**
 * La suite d'écrans principaux
 */
const ScreenStacks = createStackNavigator(
  {
    Screen2,
    Screen3,
    Screen4,
    Screen5,
  },
  {
    initialRouteName: 'Screen2',
    navigationOptions: {
      header: null,
    },
  },
);

/**
 * Un switch entre l'écran de choixd e langue et la suite
 */
const Navigator = createSwitchNavigator(
  {
    Screen1,
    ScreenStacks,
  },
  {
    initialRouteName: 'Screen1',
    navigationOptions: {
      header: null,
    },
  },
);

export default Navigator;
