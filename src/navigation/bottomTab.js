import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/dashboard';
import Wishlist from '../screens/wishlist';
import History from '../screens/history';
import Screen1 from '../screens/gallery/post';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator 
      options={{headerShown: false}}>
        <Tab.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
        <Tab.Screen options={{headerShown: false}} name="Wishlist" component={Wishlist} />
        <Tab.Screen name="History" component={History} />
      </Tab.Navigator>
  );
}