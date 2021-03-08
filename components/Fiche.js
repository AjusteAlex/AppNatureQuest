import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import axios from 'axios';

export default function Fiche(props) {

    const [ fiche, setFiche ] = useState(undefined);

    useEffect(function() {
        axios.get(`http://127.0.0.1:8000/fiche/`+ props.id)
        .then(function(response) {
            setFiche(response.data);
        }) 
    }, [props.id]);

    if (fiche === undefined){
        return <View>
        <Text>Loading...</Text>
      </View>
    }


    return (
        <View style={{flex: 1}}>
            <Text style={styles.title}>{fiche.title}</Text>
            <LinearGradient
            // Background Linear Gradient
            colors={['#A3D05A','#49AC72']}
            style={styles.background}>

            <View style={styles.text}>
                <Image style = {styles.icon} source={require('../assets/info.png')} />
                <Text style={styles.subtitle}>{fiche.subtitle}</Text>
            </View>
            <View style={styles.container1}>
                <Image style={styles.img1} source={{ uri: 'http://127.0.0.1:8000/uploads/images/finalsheets/' + fiche.image1 }} />
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: 'http://127.0.0.1:8000/uploads/images/finalsheets/' + fiche.image2 }} />
                    <Image style={styles.img} source={{ uri: 'http://127.0.0.1:8000/uploads/images/finalsheets/' + fiche.image3 }} />
                    <Image style={styles.img} source={{ uri: 'http://127.0.0.1:8000/uploads/images/finalsheets/' + fiche.image4 }}  />  
                </View>
            </View>

            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    title: { 
        fontSize:30,
        color:'#49AC72',
        fontWeight:"500",
        textAlign: 'center',
        backgroundColor: '#f0efeb',
        paddingTop: 20,
        paddingBottom: 20,

    },
    text:{
        flexDirection: "row",
    },
    icon:{
        width: 80,
        height: 80,
        marginLeft: 20,
        marginTop: 30,
    },
    subtitle: { 
        fontSize:15,
        color:'#ffff',
        fontWeight:"400",
        textAlign: 'left',
        marginTop: 30,
        marginLeft: 20,
    },
    container1:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        
    },
    img1:{
        width: 200,
        height: 400,
        borderRadius: 10,
        marginRight: 10,
    },
    container:{
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        
    },
    img:{
        width: 100,
        height: 110,
        borderRadius: 10,
    },
    background:{
      flex:1,
      alignItems:'center',
      left: 0,
      right: 0,
      top: 0,
      height:'100%',
    }
});