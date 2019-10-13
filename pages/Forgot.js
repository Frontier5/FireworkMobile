import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

import Logo from  '../components/Logo'
import Reset from  '../components/Reset'

export default class Forgot extends Component {
  static navigationOptions ={
    header : null
  }
 render() {
    return (
      <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior="padding"
      >
      <View style={styles.container}>
        <Logo/>
        <Reset/>
        <View style={styles.forgotpass}>
            <Text style={styles.pass}>Login?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Loginuser')}>
            <Text style={styles.passButton}>Click here</Text>
            </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e1e2f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    forgotpass: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection:'row'
    },
    pass: {
        color:'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    passButton: {
        color: '#06c4c4',
        fontSize:16,
        fontWeight: '500'
    }
  });
  