import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import AddProperty from './src/screens/AddProperty';
import ViewProperty from './src/screens/ViewProperty';
import EditProperty from './src/screens/EditProperty';
import Rules from './src/screens/Rules';
import FirstType from './src/screens/requestScreens/FirstType';
import SecondType from './src/screens/requestScreens/SecondType';
import ThirdType from './src/screens/requestScreens/ThirdType';
import ViewTabStack from './src/screens/ViewReqeuest';

//import { Provider as ReduxProvider } from "react-redux";

//const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
    cardStyle: {height: '100%'},
  };

  return (
    //   <ReduxProvider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddProperty" component={AddProperty} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="ViewProperty" component={ViewProperty} />
        <Stack.Screen name="EditProperty" component={EditProperty} />
        <Stack.Screen name="FirstType" component={FirstType} />
        <Stack.Screen name="SecondType" component={SecondType} />
        <Stack.Screen name="ThirdType" component={ThirdType} />
        <Stack.Screen name="ViewRequest" component={ViewTabStack} />
      </Stack.Navigator>
    </NavigationContainer>
    // </ReduxProvider>
  );
}
