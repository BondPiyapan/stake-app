import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MainEngineerTabNavigator from './MainEngineerTabNavigator';

import LoginTabNavigator from './LoginTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
  // Main: MainTabNavigator,
  Login: LoginTabNavigator,
  Main: MainTabNavigator,
  MainEngineer :MainEngineerTabNavigator
  
}));