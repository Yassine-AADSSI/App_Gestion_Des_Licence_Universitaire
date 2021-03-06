import React from 'react';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';


import * as firebase from 'firebase';

export default class loading_page extends React.Component {

    componentDidMount(){
      firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? "App" :"Auth")

      })
    }


  render(){
  return (
    <View style={styles.container}>
      <Text>loading ....</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
      
    </View>
  );
}
}


const styles = StyleSheet.create({

    container: {
        flex :1,
        justifyContent :"center",
        alignItems :"center"

    }


})