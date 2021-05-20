import React from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';


class LoginScreen extends React.Component {

    state={
        email:"",
        password:""
    }
    
    login_click = () => {
        if(this.state.email == "email@teste.com" && this.state.password == "123")
        this.props.navigation.navigate('Home')
        else alert('Email ou a senha, incorretos !!!')
    }

     
    render(){
    return(
        <View style={styles.keyboard}>
            <View>
                <Text style={styles.title}>IMOB{"\n"}KONG</Text>
                <TextInput
                style={styles.input1}
                placeholder="E-mail"
                autoCorrect={false}
                onChangeText={text => this.setState({email:text})}
                />

                <TextInput
                style={styles.input1}
                placeholder="Senha"
                autoCorrect={false}
                secureTextEntry
                onChangeText={text => this.setState({password:text})}
                />

                <TouchableOpacity
                style={styles.touch} 
                onPress={this.login_click}
                >
                    <Text style={styles.texto}>Entrar</Text> 
                </TouchableOpacity>
            </View>
        </View>
    );
}}



const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:30,
        paddingHorizontal: 50
    }, 
    texto: {
      color:'#fff',
      paddingHorizontal: 15
    },
    keyboard:{
        flex:1,  
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1C1C1C',
    },
    input1:{
        margin: 15,
        height: 40, 
        width: 250,
        borderColor: '#fff',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff', 
        borderRadius: 10
    },
    touch:{
        backgroundColor: '#fb5b5a',
        borderRadius: 10,
        width: 90,
        padding: 10,
        marginHorizontal: 95
    }
  });

export default LoginScreen;