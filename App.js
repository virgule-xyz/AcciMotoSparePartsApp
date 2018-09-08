import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Screen1 from '@screens/Screen1';
import Screen2 from '@screens/Screen2';
import Screen3 from '@screens/Screen3';
export default createStackNavigator({
  Screen1: Screen1,
  Screen2: Screen2,
  Screen3: Screen3
}, {
  initialRouteName: 'Screen1',
  navigationOptions: {
    header: null
  }
});
