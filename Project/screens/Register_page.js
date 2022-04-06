import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation} from 'react-native';



import * as firebase from 'firebase';

import {Ionicons} from '@expo/vector-icons'


export default class Register_page extends React.Component {
    static navigationOptions ={
        headerShown: false


    }
    state = {
        name:"",
        email : "",
        password : "",
        errorMessage : null


    }
    handleRegister = () => {
      firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        })
      })
      .catch(error => this.setState({ errorMessage :error.message }))
    }

  render(){
  return (
    <View style={styles.container}>
         <StatusBar backgroundColor='#00bfff' barStyle="light-content"></StatusBar>
         <Image source={require("../assets/first2.jpg")}
        style={{marginTop: -70, marginLeft: -40}}
        ></Image>
        <Image source={require("../assets/first.jpg")}
        style={{position:"absolute" , bottom: -180, right: -15}}
        ></Image>


        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
        </TouchableOpacity>





        <View style={ {position :"absolute", top: 99, alignItems : "center", width:"100%"}}>
            <Text style={styles.greeting}>INSCRIVEZ VOUS</Text>
            </View>

                    <TouchableOpacity style={styles.avatar}>
                <Ionicons
                name="ios-add"
                size={55}
                color="#FFF"
                style={{marginTop:6,marginLeft:2}}       
                ></Ionicons>
                                </TouchableOpacity>


                <View style={styles.errorMessage}>
                   {this.state.errorMessage && <Text style={styles.error}> {this.state.errorMessage}</Text>}
                </View>
            
            <View style={styles.form}>
            
            <View>
            <Text style={styles.inputTitle}>Full name</Text>
                    <TextInput style={styles.input} autoCapitalize="none" 
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                    
                    ></TextInput>
                    </View> 

            <View style={ {marginTop :32}}>
            <Text style={styles.inputTitle}>Email</Text>
                    <TextInput style={styles.input} autoCapitalize="none" 
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    
                    ></TextInput>
                    </View> 
            
            <View style={ {marginTop :32}}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry
                     autoCapitalize="none"
                     onChangeText={password => this.setState({ password })}
                     value={this.state.password}
                     ></TextInput>
                    </View> 
                    <View style={{height:25 }}></View>
                    <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
                     <Text>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf :"center", marginTop:32}}
                onPress={() => this.props.navigation.navigate("Login")}>

                <Text style={{ color: "#414959", fontSize: 13}}> vous avez deja un compte ?
                <Text style={{fontWeight:"500", color:"#00bfff"}}>Sign in</Text>
                </Text>
                
                </TouchableOpacity>


                
            </View>

    </View>
  );
}
}


const styles = StyleSheet.create({

    container: {
        flex :1,
        backgroundColor :"white"
    },
    greeting :{
        marginTop :-32 ,
        fontSize:18,
        fontWeight: "400",
        textAlign: "center",
        color: "#FFF"
        
    },
    errorMessage:{
        height:72,
        alignItems :"center",
        justifyContent:"center",
        marginHorizontal:38

   },
   error :{
   color:"#E9446A",
   fontSize :13,
   fontWeight:"600",
   textAlign:"center"
},

    form :{
        marginBottom:48,
        marginHorizontal:30,
    },
    inputTitle :{
        color:"#8A8F9E",
        fontSize:10,
        textTransform:"uppercase"
    },
    input :{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:"#161F3D"
    },
    button :{
        marginHorizontal : 30,
        backgroundColor :"#00bfff",
        borderRadius : 4,
        height: 52,
        alignItems :"center",
        justifyContent : "center"
    },
    back :{
        position : "absolute",
        top: 48,
        left:32,
        width:32,
        height:32,
        borderRadius:16,
        backgroundColor :"rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent:"center"


    },
    avatar:{
        width:100,
        height :100,
        borderRadius:50,
        backgroundColor:"#E1E2E6",
        marginTop:-70,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:157
    },


})