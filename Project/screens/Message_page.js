import React from "react"

import {View, Text, StyleSheet, TouchableOpacity,StatusBar, TextInput, Image} from "react-native"

import * as firebase from 'firebase';

export default class Message_page extends React.Component {


  state ={
    email: "",
    displayName: ""
  }
  
  componentDidMount(){
    const {email,displayName} = firebase.auth().currentUser;

    this.setState({ email, displayName })

  }

  edite_data(Adress,Phone,CIn,License){  
    const yuo = this.state.displayName

  console.log('opop',yuo)
        firebase.database().ref(yuo ).set({
          Adress,
          Phone,
          CIn,
          License
}).then((data) => {
  console.log('data', data)
}).catch((error) => {
  console.log('error', error)

}

)

this.props.navigation.navigate("Confirmation")
      }

    render() {
  
     
        return (
        <View style={styles.container}>
             <StatusBar backgroundColor='#00bfff' barStyle="light-content"></StatusBar>
           
      <Text style={styles.greeting}>sign up </Text>
      
      <Image source={require('../assets/con_test1.jpg')}
        style={{position:"absolute" , bottom: -150, right: -300}}
        />
      <View style={styles.form}>

      <View>
<Text style={styles.inputTitle}>Adress</Text>
                    <TextInput style={styles.input} autoCapitalize="none" 
                    multiline={true}
                    numberOfLines={2}
                    onChangeText = { (Adress) => this.setState({Adress})}

                    ></TextInput>
                     </View>

                     <View style={ {marginTop :32}}>
<Text style={styles.inputTitle}>PHONE NUMBER</Text>
                    <TextInput style={styles.input} autoCapitalize="none" 
                    keyboardType ='numeric'
                      onChangeText = { (Phone) => this.setState({Phone})}
                    ></TextInput>
                     </View> 
                     
                    <View style={ {marginTop :32}}>
<Text style={styles.inputTitle}>CIN </Text>
                    <TextInput style={styles.input} autoCapitalize="none" 
                      onChangeText = { (CIn) => this.setState({CIn})}
                    ></TextInput>
                     </View> 


<View style={ {marginTop :32}}>
<Text style={styles.inputTitle}>License</Text>
                    <TextInput style={styles.input} autoCapitalize="none" 
                      onChangeText = { (License) => this.setState({License})}
                    ></TextInput>
                      </View> 
      
      
      
      
      
      
      <TouchableOpacity style={styles.button}
      onPress = { () => this.edite_data(this.state.Adress,this.state.Phone,this.state.CIn,this.state.License)}
      >
      <Text style={styles.buttonText}>
        Confirm 
      </Text>
    </TouchableOpacity>

    </View>


    </View> 

          )
    }


}




const styles = StyleSheet.create(
{
    container:{
      flex :1,
      backgroundColor :"white"
    },
     greeting: {
        marginTop :40 ,
        fontSize:30,
        fontWeight: "400",
        textAlign: "center",
    },
    button: {
      height: 45,
      borderRadius: 5,
      marginHorizontal: 100,
      marginVertical: 50,
      backgroundColor: '#00bfff',
      justifyContent: 'center',
      //flex: 1
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15,
    },
    form :{
      marginBottom:48,
      marginHorizontal:30,
      marginTop: 55
  },
    inputTitle :{
      color:"#8A8F9E",
      fontSize:10,
      textTransform:"uppercase"
  },
  input :{
    borderBottomColor:"#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height:50,
    fontSize:15,
    color:"#00bfff"
},

}
)