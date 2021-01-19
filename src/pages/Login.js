import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import logo from '../assets/logo.png'

export default function Login() {

    return (
        <View style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>INSIRA SEU E-MAIL *</Text>
                <TextInput style={styles.input}
                    placeholder='Seu email'
                    placeholderTextColor='#999'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false} />

                <Text style={styles.label}>TECNOLOGIAS</Text>
                <TextInput style={styles.input}
                    placeholder='Teconologias de interesse'
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false} />

                <TouchableOpacity style={styles.button}></TouchableOpacity>

            </View>


        </View>);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8

    },
    form: {

        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30

    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius:  50


    },
    button: {
        height: 42,
        backgroundColor: '#0a0d78',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
})

