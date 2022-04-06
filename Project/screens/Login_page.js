import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, StatusBar, LayoutAnimation} from 'react-native';



import * as firebase from 'firebase';
import { startClock } from 'react-native-reanimated';
import { Header } from 'react-native/Libraries/NewAppScreen';

import {Ionicons} from '@expo/vector-icons'



export default class Login_page extends React.Component {

    static navigationOptions ={
        headerShown: false


    }
    state = {

        email : "",
        password : "",
        errorMessage : null


    }
    handleLogin = () => {
        const{ email, password} = this.state;

        firebase
        .auth()
        .signInWithEmailAndPassword(email ,password)
        .catch(error => this.setState({errorMessage: error.message }))



    }

  render(){
      LayoutAnimation.easeInEaseOut();
  return (
    <View style={styles.container}>
          <StatusBar backgroundColor='#00bfff' barStyle="light-content" />
        <Image source={require("../assets/first2.jpg")}
        style={{marginTop: -70, marginLeft: -40}}
        ></Image>
        <Image source={require("../assets/first.jpg")}
        style={{position:"absolute" , bottom: -240, right: -190}}
        ></Image>

         <Image source={require("../assets/logo.jpg")}
        style={{marginTop: -235, alignSelf : "center", shadowColor :"black", borderRadius : 45}}
        ></Image>


        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
        </TouchableOpacity>

        <Text style={styles.greeting}>ESTC AUTH</Text>

            

                <View style={styles.errorMessage}>
                   {this.state.errorMessage && <Text style={styles.error}> {this.state.errorMessage}</Text>}
                </View>
            
            <View style={styles.form}>
            
            <View>
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

                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                     <Text>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf :"center", marginTop:32}}
                onPress={() => this.props.navigation.navigate("Register")}
                
                >
                <Text style={{ color: "#414959", fontSize: 13}}> vous etes nouveau ??
                <Text style={{fontWeight:"500", color:"#00bfff"}}>Sign UP</Text>
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
        marginTop :5 ,
        fontSize:20,
        fontWeight: "400",
        textAlign: "center",
        color:"white"
        
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

})