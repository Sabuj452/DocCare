import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import BookAppointment from './screens/BookAppointment';
import Success from './screens/Success';
import Pending from './screens/Pending';
import Completed from './screens/Completed';
import CallAmb from './screens/CallAmb';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  BookAppointment: undefined;
  Success: undefined;
  Pending: undefined;
  Completed: undefined;
  CallAmb: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookAppointment"
          component={BookAppointment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pending"
          component={Pending}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Completed"
          component={Completed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CallAmb"
          component={CallAmb}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
