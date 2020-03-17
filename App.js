import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackContainer, createStackNavigator} from "react-navigation-stack"
import Home from "./screens/Home";
import Follow from "./screens/Follow";


const mainNavigator=createStackNavigator({
  Home:{screen:Home},
  Follow:{screen:Follow}
}, 
  {
    defaultNavigationOptions:{
      
      headerTintColor:"#fff",
      headerStyle:{
        backgroundColor:"red"
      },
      headerTitleStyle:{
        color:"#FFF"
      }
    }
  }
)
const App=createAppContainer(mainNavigator)
export default App
