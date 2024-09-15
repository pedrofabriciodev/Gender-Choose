import { useState } from "react";

import { Alert, Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import { useNavigation } from "@react-navigation/native";

import {db} from '@/database/initializeDatabase';

import styles from "./loginStyle";
import color from "@/colors/colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "types";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;


const Login = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const [matricula,  setMatricula] = useState("");
    const [cpf, setCpf] = useState("");
    
     const handleLoginUser = async() => {
        if(matricula.length === 0 || cpf.length === 0){
            Alert.alert('Error', 'Preencha todos os campos')
            return;
        }
        try {
            const user = await db.getFirstAsync('SELECT * FROM rh WHERE matricula = ? AND cpf = ?' , [matricula, cpf])
            const select = await db.getAllAsync('SELECT * FROM generos')
            if(!user){
                Alert.alert('Error', 'Matricula ou Cpf não cadastrados!')

            }else{
                navigation.navigate('Home', {cpf});
                console.log(user)
                console.log(select)
                setCpf('');
                setMatricula('');   
            }


        } catch (error) {
            console.log(error);
            
        }

    
    }


    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:'#1D1D1D'}}>
            <StatusBar
                barStyle="light-content"  // ou "light-content" dependendo do contraste necessário
                backgroundColor="transparent"
                translucent={true}
            />

                <TextInput
                    style={styles.input}
                    placeholder="Matricula"
                    placeholderTextColor= {color.tittleColor}
                    keyboardType="numeric"
                    maxLength={8}
                    value={matricula}
                    onChangeText={setMatricula}
                /> 

                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    placeholderTextColor={color.tittleColor}
                    keyboardType="numeric"
                    maxLength={11}
                    value={cpf}
                    onChangeText={setCpf}
                /> 

                <TouchableOpacity style={styles.button} onPress={handleLoginUser}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
      );

};



export default Login;