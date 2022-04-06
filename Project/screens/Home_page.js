import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, LayoutAnimation, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import * as firebase from "firebase";




posts = [
  {
      id: "1",
      name: "Licence professionelle Mobilité Internet  ",
      text:
          "Cette Licence professionnelle forme des diplômés dans les secteurs très demandeurs et porteurs du développement web,d'applications mobiles et d'objets connectés.",
      timestamp: 1569109273726,
      
      
  },
  {
      id: "2",
      name: "licence developpement logiciel",
      text:
          "Forme des informaticien sgénéralistes intégrant l’enjeu de la qualité sous tous ses aspects, de la phase du recueil des besoins jusqu’au déploiement du code,grâce aux bonnes pratiques des méthodes agiles.",
      timestamp: 1569109273726,
      
  },
  {
      id: "3",
      name: "licence Glassri",
      text:
          "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
      timestamp: 1569109273726,
      
  },
  {
      id: "4",
      name: "licence A&i",
      text:
          "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
      timestamp: 1569109273726,
      
  },
  {
      id: "5",
      name: "licence Securité reseau",
      text:
          "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
      timestamp: 1569109273726,
      
  }
];



class Home_page extends React.Component {

  constructor(props){
    super(props)
    
    
    this.state= {
        lic: posts,
        email: "",
        displayName: ""
    }
  }

  componentDidMount(){
    const {email,displayName} = firebase.auth().currentUser;

    this.setState({ email, displayName })

  }

  signOutUser = () => {
    firebase.auth().signOut();
  
  }

  _idmethode =(ide) => {
    //console.log(id)
    
    var x=0

    //console.log(ide)

    const action = { type: "TOGGLE_FAVORITE", value: ide }
    this.props.dispatch(action)
    
    //this.state.lic=ide 

    
    //console.log(this.state.lic.id)

}
  _displayFavoriteImage(ii) {
  //console.log(ii)

  var sourceImage = require('../assets/11.png')
  
  if (this.props.favoritesFilm.findIndex(item => item.id === ii) !== -1) {
      // Film dans nos favoris
      sourceImage = require('../assets/12.jpg')
}
return (
  <Image
    style={styles.favorite_image}
    source={sourceImage}
  />
) 
}

  renderPost = post => {
    var idd = post.id
    console.log(idd)
    return (
        <View style={styles.feedItem}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={styles.name}>{post.name}</Text>
                        <Text style={styles.post}>{post.text}</Text>
                        

                        <TouchableOpacity
                              style={styles.favorite_container}
                              onPress={()=>this._idmethode(post)}>
                               {this._displayFavoriteImage(idd)}
                        </TouchableOpacity>
                        
                        
                    </View>
                    
        </View>
        
        </View>
        </View>
         );
        };













  render(){
    LayoutAnimation.easeInEaseOut();
    
  return (
    <View style={styles.container}>



<View style={styles.main_container} >
    <View style={styles.header}>
         <Text style={{color: "#00bfff", fontSize:30}}>Home Content</Text>
         
    </View> 
    <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    

                ></FlatList>


  
    </View>














      <TouchableOpacity style={{marginTop : -15, backgroundColor:"gray"}} onPress={this.signOutUser}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    
    </View>
  );
}
}


const styles = StyleSheet.create({

    container: {
        flex :1,
        justifyContent :"center",
        alignItems :"center"

    },





    main_container: {
      backgroundColor:"#EFECF4",
  
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
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
      //  flexDirection: "row",
        marginVertical: 8
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    favorite_image: {
        width: 40,
        height: 40
    }






})
const mapStateToProps = (state) => {
  return{
      favoritesFilm: state.favoritesFilm
  }
  }

export default connect(mapStateToProps)(Home_page)
