import  * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/login/login';
import HomeScreen from '../screens/home/home';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from '@/database/initializeDatabase';

import { RootStackParamList } from 'types';


const Stack = createStackNavigator<RootStackParamList>();


const Navigation = () => {
  return (
    <SQLiteProvider databaseName='genderChoose.db' onInit={initializeDatabase}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </SQLiteProvider>

  );
};

export default Navigation;