/* App.js for constructing separate pages
 * CS-262 homework02
 * Name: Yeo Myeong Yoon
 * Date: October 15, 2021
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayersScreen from "./screens/players"
import DetailsScreen from "./screens/details"
import AboutScreen from "./screens/about"
import Header from "./shared/header"

const Stack = createNativeStackNavigator();

export default function App () { 
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Players" component={PlayersScreen} 
          options={({ navigation }) => ({
            headerRight: () => (
                <Header navigation={navigation}/>
            )
          })} />

        <Stack.Screen name="Details" component={DetailsScreen} 
          options={({ navigation }) => ({
            headerRight: () => (
              <Header navigation={navigation}/>
            )
          })} />

        <Stack.Screen name="About" component={AboutScreen} options={{ 
          title: 'About',
          headerTitleStyle: {
            fontWeight: 'bold',
            right: 30,
          },
          }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};
