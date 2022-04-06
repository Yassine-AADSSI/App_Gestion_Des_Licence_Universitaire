import React from "react"
import {View, Text, StyleSheet, Image, StatusBar} from "react-native"

export default class Contact extends React.Component {

    render() {   
    return (
    <View style={styles.main_container} >
        <StatusBar backgroundColor='#00bfff' barStyle="light-content"></StatusBar>
    <View style={styles.header}>
         <Text style={{color: "#00bfff", fontSize:30}}>Contact </Text>
    </View>

    <Image source={require('../assets/con_test1.jpg')}
        style={{position:"absolute" , bottom: -150, right: -300}}
        />


    <View style={{marginTop:20}}>
    <View style={styles.feedItem}>
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", justifyContent: "center"}}>
            <Image source={require('../assets//mail.jpg')} style={styles.img}/>
            <Text style={{marginTop: 16, fontSize:16,}} >       ESTC@gmail.com</Text>
              </View>
              
              </View>
              
              </View>
    </View>
    <View style={styles.feedItem}>
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", justifyContent: "center"}}>
            <Text>   </Text>
            <Image source={require('../assets/adresse.jpg')} style={styles.img2}/>
            <Text style={{marginTop: 16, fontSize:16,}} >    Route d'Eljadida KM 7 CASABLANCA</Text>
              </View>
              
              </View>
              
              </View>
    
    </View>
    <View style={styles.feedItem}>
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", justifyContent: "center"}}>
            <Text>   </Text>
            <Image source={require('../assets/icontelephone.jpg')} style={styles.img2}/>
            <Text style={{marginTop: 16, fontSize:16,}} >    +212 6 00151488</Text>
              </View>
              
              </View>
              
              </View>
    
    </View>
    </View>
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

  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8    
},

img: {
  width: 80,
  height:50
},

img2: {
  width: 60,
  height:50

}

});
