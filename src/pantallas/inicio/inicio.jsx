import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./calculadoraIMC.styles";

export const Inicio = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../../assets/jorge.jpg")}
          style={styles.imagenPerfil}
        />
        <Text style={styles.nombre}>Jorge Ismael Doicela Molina</Text>
        <Text style={styles.carrera}>Tecnología Superior en Desarrollo de Software</Text>
        <Text style={styles.info}>ISTPET - Tercer Semestre</Text>
        <Text style={styles.descripcion}>
          Tengo 22 años, nací el 22 de febrero. Me apasiona la verdad, el conocimiento, y todo lo relacionado con Dios. 
          Soy cristiano, defensor de la justicia y la fe auténtica.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Intereses</Text>
        <Text style={styles.sectionText}>
          Desarrollo de software, ciberseguridad, inteligencia artificial, aplicaciones móviles, diseño de interfaces, 
          arquitectura de software, y soluciones tecnológicas innovadoras.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 ¿Qué es el IMC?</Text>
        <Text style={styles.sectionText}>
          El Índice de Masa Corporal (IMC) es una fórmula que evalúa si una persona tiene un peso saludable 
          en relación con su estatura. Nuestra aplicación calcula tu IMC e interpreta tu estado nutricional.
        </Text>
      </View>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Calculadora IMC")}>
        <Text style={styles.textoBoton}>Ir a la Calculadora IMC</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
