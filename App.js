import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import Home from "./src/screen/Home/Home";
import Login from "./src/screen/Login/Login";
import Register from "./src/screen/Login/Register";
const Stack = createStackNavigator();
function App(){

  return(
    <NavigationContainer>
        <Stack.Navigator   screenOptions={{
    headerShown: false
  }}
>
            <Stack.Screen  name="Home" component={Home}/>
            <Stack.Screen  name="Login" component={Login} />
            <Stack.Screen  name="Register" component={Register}/>
            

           </Stack.Navigator>
</NavigationContainer> 
  
  
  )
}

export default App;




