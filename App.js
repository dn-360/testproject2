import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';
import EighthPage from './EighthPage';

const App = createStackNavigator({
    FirstPage: { screen: FirstPage }, 
    SecondPage: { screen: SecondPage }, 
    ThirdPage: { screen: ThirdPage },
    FourthPage: { screen: FourthPage },
    FifthPage: { screen: FifthPage },
    SixthPage: { screen: SixthPage },
    SeventhPage: { screen: SeventhPage },
    EighthPage: { screen: EighthPage },
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);