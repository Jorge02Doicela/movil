import { View, Text } from 'react-native';

const HistorialIMC = ({ historial }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Historial:</Text>
      {historial.map((item, index) => (
        <View
          key={index}
          style={{
            padding: 10,
            backgroundColor: '#ecf0f1',
            borderRadius: 8,
            marginBottom: 8,
          }}
        >
          <Text>Fecha: {item.fecha}</Text>
          <Text>IMC: {item.imc} ({item.nivel})</Text>
        </View>
      ))}
    </View>
  );
};

export default HistorialIMC;
