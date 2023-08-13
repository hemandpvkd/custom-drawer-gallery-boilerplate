import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './drawer';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../screens/gallery/post';
import Screen2 from '../screens/gallery/details';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const InstaViewStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // presentation: 'transparentModal'
      }}>
      <Stack.Screen
        name="Posts"
        component={Screen1}
        options={{headerShown: false,
          presentation: 'transparentModal'
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Screen2}
        options={{headerShown: false,
        presentation: 'transparentModal'
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="PostsNavigation"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InstaViewStack"
            component={InstaViewStack}
            options={{headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
