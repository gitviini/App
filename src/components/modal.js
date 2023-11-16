import {React, useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const ModalView = ({close})=>{
    return(
        <View style={css.container}>
            <View style={css.box}>
                <TouchableOpacity style={css.button} onPress={()=>{close()}}>
                    <Text style={{color: '#fff', fontSize: 20, transform: 'rotate(45deg)'}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box:{
        width: '70%',
        height: '50%',
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button:{
        width: 25,
        height: 25,
        backgroundColor: 'red',
        borderRadius: 12.5,
        margin: 10,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
})