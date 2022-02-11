import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {NavigationContainer,StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./pages/home";
import ResetPassword from "./pages/resetpassword.js"
import Register from "./pages/registration.js"
import Dashboard from "./pages/dashboard.js"
import registerNNPushToken from 'native-notify';
import ChangePassword from "./pages/changepassword";
const Stack = createStackNavigator();

export default function App() {
  registerNNPushToken(2038, 'Gf4YrPXWaj2d5WEMBDERCP');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{title:"KCE CORNER",headerStyle:{backgroundColor:"white"},headerTitleStyle:{fontWeight:"bold"},headerLeft:()=><Image source={require("./pages/images/logo1.png")} style={{width:85,height:55,marginLeft:50,}}/>}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

