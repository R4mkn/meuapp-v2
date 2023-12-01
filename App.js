import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importar todas as telas criadas 

import HomeScreen from "./screens/Home";
import GTA3Screen from "./screens/GTA3";
import GTAVCScreen from "./screens/GTAVC";
import GTASAScreen from "./screens/GTASA";

//Criar uma função createStackNavigator e armazenar em uma constante chamada Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    //Usar o componente NavigationContainer e dentro dele adicionar as telas. 
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "GTA3" component = {GTA3Screen}/>
        <Stack.Screen name = "GTAVC" component = {GTAVCScreen}/>
        <Stack.Screen name = "GTASA" component = {GTASAScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
