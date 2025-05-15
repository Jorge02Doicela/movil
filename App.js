import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const[peso, setPeso]=useState();
  const [altura, setAltura]=useState();
  
  return (
    <View style={styles.container}>
      <Text>Calculadora IMC</Text>
      <Image style={styles.imagen} source={{uri: "https://institutotraversari.edu.ec/wp-content/uploads/2025/01/ISTPET-ORIGINAL.jpg"}}/>
      <TextInput onChangeText={(value)=>setPeso(value)} style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su Peso(kg):'></TextInput>
      <TextInput onChangeText={(value)=>{
       setAltura(value);
      console.log(altura);
      }} style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su Altura(m):'></TextInput>
      <Button title='Calcular' onPress={()=>{Alert.alert("Información","Felicidades, es tu primer Alerta"); }}>
      </Button>
    </View>
  );
}
const calcularIMC=(peso, altura)=>{
  let imc = peso/(altura*altura);
  return imc.toFixed(2);
}
const calcularNivelPeso=(peso, altura)=>{
  let imc= calcularIMC(peso, altura);
  let respuesta="";
if(imc<18.5){
    respuesta = "su IMC es:" +imc+ "Bajo peso";
  }
  if (imc>=18.5 && imc<=24.9){
    respuesta = "su IMC es:"+imc+"peso Normal";
  }
  if(imc>=25 && imc<=29.9){
    respuesta = "su IMC es:"+imc+"Sobre peso";
  }
  if(imc>30){
    respuesta ="su iMC es:"+imc+"obesidad";
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width:100,
    height:50
  },
  textInput:{
    borderColor:"#000000",
    borderRadius:1,
    borderWidth:1
  }
});