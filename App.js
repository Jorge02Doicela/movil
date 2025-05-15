import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const[peso, setPeso]=useState();
  const [altura, setAltura]=useState();
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Calculadora IMC</Text>
      <Text style={styles.texto2}>Bienvenido al programa para calcular su indice de masa corporal, la formula para calcularlo es: </Text>

      <Image style={styles.imagen} source={{uri: "https://masqueprogramar.wordpress.com/wp-content/uploads/2017/03/formulaimc.png"}}/>
      <Image style={styles.imagen} source={require('./assets/icon.png')}/>

      <TextInput onChangeText={(value)=>setPeso(value)} style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su Peso(kg):'></TextInput>
      <TextInput onChangeText={(value)=>{
       setAltura(value);
      console.log(altura);
      }} style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su Altura(m):'></TextInput>
      <Button style={styles.buttonText} title='Calcular' onPress={()=>{Alert.alert("Información", calcularNivelPeso(peso, altura));
      }}></Button>
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
return respuesta;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  imagen: {
    width: 220,
    height: 110,
    marginBottom: 30,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#90caf9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  textInput: {
    width: '100%',
    borderColor: '#64b5f6',
    borderWidth: 1.8,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#0d47a1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: '#1e88e5',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginBottom: 28,
    textAlign: 'center',
    letterSpacing: 1.1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1976d2',
    marginBottom: 12,
    textAlign: 'center',
  },
  texto2:{
    color: '#50a3d2',
    textAlign: 'center',
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  button:{
    margin:100,
  }
});
