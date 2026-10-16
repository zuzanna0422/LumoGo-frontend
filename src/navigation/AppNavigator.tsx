import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import LoadingScreen from '../screens/LoadingScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import SignUpScreen from '../screens/SignUpScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import RegistrationSuccessScreen from '../screens/RegistrationSuccessScreen';
import LoginScreen from '../screens/LoginScreen';

export type RootStackParamList = {
  Loading: undefined;
  Authentication: undefined;
  SignUp: undefined;
  Registration: undefined;
  RegistrationSuccess: undefined;
  Login: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Authentication" component={AuthenticationScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccessScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
}
