import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home'
import Camera from '../screen/Camera'
import Imagepicker from '../screen/Imagepicker'
const Stack = createStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="Imagepicker" component={Imagepicker} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;