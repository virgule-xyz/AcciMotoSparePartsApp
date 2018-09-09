import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Screen1 from '@screens/Screen1';
import Screen2 from '@screens/Screen2';
import Screen3 from '@screens/Screen3';
import Screen4 from '@screens/Screen4';
import Screen5 from '@screens/Screen5';
export default createStackNavigator({
  Screen1: Screen1,
  Screen2: Screen2,
  Screen3: Screen3,
  Screen4: Screen4,
  Screen5: Screen5
}, {
  initialRouteName: 'Screen4',
  navigationOptions: {
    header: null
  }
});
