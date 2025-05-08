import { StyleSheet, Text, View, Image,  TextInput, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculadora IMC</Text>
      {/* Asegúrate de usar una URL directa a una imagen */}
      <Image style={styles.Image} source={{uri: "https://institutotraversari.edu.ec/wp-content/uploads/2024/10/FONDO-WEB1.png"}}/>
      <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='Ingrese su peso (kg)'></TextInput>
      <TextInput style={styles.TextInput} keyboardType='numeric' placeholder='Ingrese su altura'></TextInput>
      <Button title='Calcular' onPress={()=>{
        Alert.alert("Información", "Felicidades, tu primera alerta");
      }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 200,
    height: 100,
  },
  TextInput: {
    borderColor: "#00000",
    borderRadius: 3,
    borderWidth: 7
  }
});
