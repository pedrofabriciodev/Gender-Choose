import React, { useEffect, useState } from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { MaterialIcons } from '@expo/vector-icons';

import styles from "./homeStyle";
import { db } from "@/database/initializeDatabase";


type HomeRouteParams = {
  cpf: string;
};


const Home = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Record<string, HomeRouteParams>, 'Home'>>();

  const userCPF = route.params.cpf;

  const [userName, setUserName] = useState<string | null>(null);

  const getUserNameByCPF = async (cpf: string) => {
    try {
     await db.getAllAsync('SELECT nome FROM rh WHERE cpf = ?', [cpf]);
      
    } catch (error) {
      console.log("Erro ao buscar o nome do usuário:", error);
    }
  };

  // useEffect para buscar o nome quando a tela carregar
  useEffect(() => {
    getUserNameByCPF(userCPF);
  }, [userCPF]);


  const updateGenderInDatabase = async (cpf: string, gender: string) =>{
    try {
      await db.runAsync('UPDATE generos SET genero = ? WHERE cpf = ?' , [gender, cpf])
      const result = await db.getAllAsync('SELECT genero FROM generos WHERE cpf = ? ', [cpf]);
      const select = await db.getAllAsync('SELECT * FROM generos') //linha test - apagar depois

      if (result) {//linha test - apagar depois
        console.log("Gênero atualizado com sucesso para:", result);//linha test - apagar depois
        console.log(select)//linha test - apagar depois
    } else {//linha test - apagar depois
        console.log("Nenhum registro encontrado para o CPF:", cpf);//linha test - apagar depois
    }//linha test - apagar depois

    } catch (error) {
      console.log("Erro ao atualizar o genero: ",error);
    }
    
  }


  const handleBackScreen = () => {
    navigation.navigate('Login' as never);
  }
  

  const showGenderInfo = (gender: string) => {
    let title = '';
    let message = '';

    if (gender === 'Feminino') {
      title = 'Gênero Feminino';
      message = 'O gênero feminino geralmente está associado a pessoas que se identificam com características tradicionalmente femininas.';
    } else if (gender === 'Masculino') {
      title = 'Gênero Masculino';
      message = 'O gênero masculino geralmente está associado a pessoas que se identificam com características tradicionalmente masculinas. ';
    }

    Alert.alert(
      title,
      message,
      [{ text: 'Entendi', style: 'default' }]
    );
  }
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <StatusBar
          barStyle="light-content" 
          backgroundColor="transparent"
          translucent={true}
        />

          <TouchableOpacity style={styles.backButton} onPress={handleBackScreen}>
            <MaterialIcons name="arrow-back" size={20} color="black"  />
          </TouchableOpacity>

          {userName && <Text style={{color:"white"}}>Bem-vindo, {userName}!</Text>}

          <Text style={styles.tittle}>ESCOLHA SEU GÊNERO:</Text>

          <View style={styles.genderChoose}>
            <View>  
              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => updateGenderInDatabase(userCPF, 'Feminino')}>
                <Text style={{width:'80%'}}>FEMININO</Text>
                <MaterialIcons name="info" size={20} color="black" onPress={()=> showGenderInfo('Feminino')}/>
              </TouchableOpacity>
            </View>

            <View >
              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => updateGenderInDatabase(userCPF, 'Masculino')}>
                <Text style={{width:'80%'}}>MASCULINO </Text>
                <MaterialIcons name="info" size={20} color="black" onPress={()=> showGenderInfo('Masculino')} />
              </TouchableOpacity>
            </View>
            

          </View>


      </View>
    </SafeAreaView>
  );
};


export default Home;
