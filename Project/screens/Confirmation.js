import React from "react"
import {View, Text, StyleSheet, Image, StatusBar, TouchableOpacity} from "react-native"

import * as firebase from "firebase";

export default class Confirmation extends React.Component {


    signOutUser = () => {
        firebase.auth().signOut();
        this.props.navigation.navigate("Acceuil")
      }

    render() {   
    return (
    <View style={styles.main_container} >
        <StatusBar backgroundColor='#00bfff' barStyle="light-content"></StatusBar>
    <View style={styles.header}>
         <Text style={{color: "#00bfff", fontSize:30}}>Confirmation </Text>
    </View>


    <View style={{height:30,marginTop:77}}>
         <Text style={{ fontSize:30,  textAlign: 'center'}}
>Merci de choisir notre Formation </Text>
    </View>
      
    
    
    <TouchableOpacity style={{marginTop :175, backgroundColor:"gray"}} onPress={this.signOutUser}>
        <Text style={{ textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15,}}>LOGOUT</Text>
      </TouchableOpacity>
    
    </View>
  );

    }

}

const styles = StyleSheet.create(

{  
    main_container: {
    flex: 1,
    backgroundColor :"#fff"

  },
  header: {
    
    paddingTop: 25,
    paddingBottom: 16,
    backgroundColor: "#DDD",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#454D65",
    shadowOffset: {height: 5},
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
  },



});
