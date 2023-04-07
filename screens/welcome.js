import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/images/welcome.gif'
import { button1 } from '../assets/common/button'
import { head1, head2 } from '../assets/common/formcss'

const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={styles.container1} >
                <View style={styles.s1}>
                    <Text style={styles.h1} >Genz</Text>
                    <Text style={styles.small1}>Managing invoices with ease</Text>
                    <Image style={styles.logo} source={logo} />
                </View>
                <View style={styles.s2}>

                    <Text style={head1}>Hey Pal!</Text>
                    <Text style={head2}>Welcome to Genz..</Text>
                    <Text style={button1} onPress={()=>{navigation.navigate('invoice')}}>Lets Begin</Text>
                </View>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    s1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
    },
    small1: {
				marginTop: 20,
        fontSize: 17,
    }
    ,
    h1: {
        fontSize: 30,
    },
    s2: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '40%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    logo: {
        resizeMode: 'contain',
				marginTop: 39,
    }
})