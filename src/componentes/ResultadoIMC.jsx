import { View, Text } from 'react-native';
import { styles } from '../pantallas/calculadoraIMC.styles.jsx';

const ResultadoIMC = ({ resultado }) => {
  return (
    <View style={[styles.resultado, { backgroundColor: resultado.color }]}>
      <Text style={styles.resultadoTexto}>{resultado.mensaje}</Text>
      <Text style={styles.resultadoTexto}>Clasificación: {resultado.nivel}</Text>
    </View>
  );
};

export default ResultadoIMC;
