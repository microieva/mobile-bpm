import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CompareScreen from '../screens/CompareScreen';


const RootStack = createStackNavigator({
    Home: {screen: HomeScreen},
    Comparator: {screen: CompareScreen}
},
{
    initialRouteName: 'Home'
}

);

export default createAppContainer(RootStack);