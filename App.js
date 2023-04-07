import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/welcome';
import Invoices from './screens/invoices';
import AddInvoices from './screens/addInvoices';
import PaymentScreen from './screens/paymentScreen';
import SuccessPage from './screens/successPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <FlashMessage position="top" /> 

      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen name="invoice" component={Invoices}
          options={
            {
              headerStyleInterpolator: forFade,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'black' },
            }
          }
        />
        <Stack.Screen name="AddInvoices" component={AddInvoices}
          options={
            {
              headerStyleInterpolator: forFade,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#2b2d31' },
            }
          }
        />

        <Stack.Screen name="PaymentScreen" component={PaymentScreen}
          options={
            {
              headerStyleInterpolator: forFade,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#2b2d31' },
            }
          }
        />
        
        <Stack.Screen name="SuccessPage" component={SuccessPage}
          options={
            {
              headerStyleInterpolator: forFade,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#2b2d31' },
            }
          }
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
