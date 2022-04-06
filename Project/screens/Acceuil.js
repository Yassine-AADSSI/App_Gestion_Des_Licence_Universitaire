import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';

  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.28;

export default class Acceuil extends React.Component {
    render(){
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#00bfff' barStyle="light-content" />
      <View style={styles.header}>
        <Image source={require("../assets/estc.jpeg")} style={styles.logo}/>
      </View>
      <View style={styles.footer}>
      <Text style={styles.title}>Welcome</Text>
      <Text  style={styles.text}>Students sign in | EST</Text>
      <TouchableOpacity >
      <Text>
        
      </Text>
    </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>

        <Text  style={styles.buttonText}>Login</Text>       
        </TouchableOpacity>

      </View>
    </View>




        );
        }}


const styles = StyleSheet.create({

  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  logo: {
    width: 400,
    height: 500
},
footer: {
  flex: 1,
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingVertical: 50,
  paddingHorizontal: 30
},
title: {
  color: '#05375a',
  fontSize: 30,
  fontWeight: 'bold'
},
text: {
  color: 'grey',
  marginTop:5
},
signIn: {
  width: 150,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  flexDirection: 'row'
},
button: {
  height: 45,
  borderRadius: 10,
  marginHorizontal: 100,
  marginVertical: 40,
  backgroundColor: '#00bfff',
  justifyContent: 'center',
  //flex: 1
},
buttonText: {
  color: '#fff',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 15,
}


        },

);
