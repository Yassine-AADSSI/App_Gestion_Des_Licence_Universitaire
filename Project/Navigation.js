import React from "react"  
//import FirebaseKeys from "./config"
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator} from "react-navigation-tabs"
import { Ionicons} from "@expo/vector-icons"
import { Entypo } from '@expo/vector-icons';

import loading_page from './screens/Loading_page'
import Login_page from './screens/Login_page'
import Home_page from './screens/Home_page'
import Register_page from './screens/Register_page'
import Acceuil from './screens/Acceuil'
import Contact from './screens/Contact'
import Message_page from './screens/Message_page'

import Confirmation from './screens/Confirmation'

import * as firebase from 'firebase';
  


var firebaseConfig = {
  apiKey: "AIzaSyDCHf1BQmUk0Eo7Gb0Iv2gzTLbV06sF7Bs",
  authDomain: "mylady-a2319.firebaseapp.com",
  databaseURL: "https://mylady-a2319.firebaseio.com",
  projectId: "mylady-a2319",
  storageBucket: "mylady-a2319.appspot.com",
  messagingSenderId: "97758729515",
  appId: "1:97758729515:web:7e3fd92eda1b109341e16e"
};
// Initialize Firebase


firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home:{
      screen: Home_page,
      navigationOptions:{
        tabBarIcon: ({ tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
      }
    },
    Message: {
      screen: Message_page,
      navigationOptions:{
        tabBarIcon: () => <Entypo name="text-document" size={24} color="black" />
         }
    },
    Contact: {
      screen: Contact,
      navigationOptions:{
        tabBarIcon: ({ tintColor}) => <Ionicons name="ios-school" size={24} color={tintColor}></Ionicons>
      }
    },

  },
  {
    tabBarOptions:{
      activeTintColor: "#161F3D",
      inactiveTintColor:"#B8BBC4",
      showLabel: false
    }
  }
)



const AppStack = createStackNavigator(
  {
    Home : Home_page
  }
);

const AuthStack = createStackNavigator(
  { 
     Acceuil : Acceuil,
     Login : Login_page,
     Register : Register_page,
     Confirmation : Confirmation

      
}
)


export default createAppContainer(

  createSwitchNavigator(
    {
      loading : loading_page,
      App : AppTabNavigator,
      Auth : AuthStack
       

    },

    {
      initialRouteName : "loading"
    }

)
)


