import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class Reset extends Component {
 render() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Roll No'
                placeholderTextColor='#ffffff'
                selectionColor='#fff'
                keyboardType='numeric'
                onSubmitEditing={()=> this.email.focus()}
                />
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder='Email'
                keyboardType='email-address'
                placeholderTextColor='#ffffff'
                selectionColor='#fff'
                ref={(input) => this.email = input}
                />
            
            <LinearGradient
            colors={['#00f2c3', '#0098f0']}
            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            style={{ height: 48, width: 300, alignItems: 'center', justifyContent: 'center', borderRadius: 25}}
            >
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonText}>
                    Reset Password
                </Text>
            </TouchableOpacity>
            </LinearGradient>    
        </View>
    );
    
  }
}

const styles = StyleSheet.create({ 
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: {
        width:300,
        height:40,
        backgroundColor: 'rgba(82, 95, 127, 0.3)',
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        padding: 11,
        marginLeft: 12,
        marginRight: 12,
        width: 292,
        height: 40,
        backgroundColor: 'rgba(30, 30, 47, 0.9)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginHorizontal: 12,
        marginVertical:10,
    },
    button: {
        width:300,
        alignItems: 'center'
    }
  });