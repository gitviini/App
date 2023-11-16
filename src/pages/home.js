import {React, useState} from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { ModalView } from '../components/modal';

const Home = () => {
    const [name, nameSet] = useState('')
    const [password, passwordSet] = useState('')
    const [visibleModal, visibleModalSet] = useState(false)
    return (
        <View style={light.content}>
            <Image source={require('../assets/favicon.png')} style={light.img}/>
            <Text style={light.title}>Coders</Text>
            <TextInput style={light.textinput} onChangeText={(value)=>{nameSet(value)}} placeholder='name' placeholderTextColor='#fff'></TextInput>
            <TextInput style={light.textinput} onChangeText={(value)=>{passwordSet(value)}} secureTextEntry={true} placeholder='password' placeholderTextColor='#fff'></TextInput>
            <View style={light.spacebutton}>
            <TouchableOpacity style={light.buttonDefault} onPress={()=>console.log('sign')}>
                <Text>cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={light.button} onPress={()=>{visibleModalSet(true); console.log(`name:${name},password:${password}`)}}>
                <Text style={light.buttontext}>enviar</Text>
            </TouchableOpacity>
            </View>
            <Modal transparent={true} visible={visibleModal}>
            <ModalView close={()=>{visibleModalSet(false)}}/>
            </Modal>
        </View>
    );
};
var light = StyleSheet.create({
    content:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    label:{
      alignSelf:'flex-start',
      marginLeft: '20%',
      color: 'rgba(0,0,0,0.5)'
    },
    title:{
      color: '#444',
      fontSize: 20,
      fontWeight: 'bold',
    },
    img: {
      width: 50,
      height: 50,
      borderRadius: 0,
      margin: 20,
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '40%',
      padding: 10,
      backgroundColor: '#456',
      borderRadius: 10,
    },
    spacebutton:{
        flexDirection: 'row',
        width: '70%',
        margin: 10,
        justifyContent: 'space-between',
    },
    buttontext: {
        fontFamily: 'monospace',
        color: '#fff',
    },
    buttonDefault:{
        padding:10,
    },
    textinput: {
        width: '70%',
        backgroundColor: 'rgba(0,0,0,0.15)',
        borderRadius: 10,
        padding: 5,
        margin: 10,
        color: '#fff'
    },
})
var dark = StyleSheet.create({
    content:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#456'
    }, 
    label:{
      alignSelf:'flex-start',
      marginLeft: '20%',
      color: 'rgba(0,0,0,0.5)'
    },
    title:{
      color: '#444',
      fontSize: 20,
      fontWeight: 'bold',
    },
    img: {
      width: 50,
      height: 50,
      borderRadius: 0,
      margin: 20,
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '40%',
      padding: 10,
      backgroundColor: '#456',
      borderRadius: 10,
    },
    spacebutton:{
      flexDirection: 'row',
      width: '70%',
      margin: 10,
      justifyContent: 'space-between',
    },
    buttontext: {
      fontFamily: 'monospace',
      color: '#fff',
    },
    buttonDefault:{
      padding:10,
    },
    textinput: {
      width: '70%',
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderRadius: 10,
      padding: 5,
      margin: 10,
      color: '#fff'
    },
  })

export default Home;