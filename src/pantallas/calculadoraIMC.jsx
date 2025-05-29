import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Keyboard, Dimensions } from 'react-native';
import { styles } from './calculadoraIMC.styles.jsx';
import ResultadoIMC from '../componentes/ResultadoIMC.jsx';
import HistorialIMC from '../componentes/HistorialIMC.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LineChart } from 'react-native-chart-kit';

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    cargarHistorial();
  }, []);

  const guardarHistorial = async (nuevoHistorial) => {
    try {
      await AsyncStorage.setItem('historialIMC', JSON.stringify(nuevoHistorial));
    } catch (error) {
      console.error("Error guardando historial", error);
    }
  };

  const cargarHistorial = async () => {
    try {
      const data = await AsyncStorage.getItem('historialIMC');
      if (data) setHistorial(JSON.parse(data));
    } catch (error) {
      console.error("Error cargando historial", error);
    }
  };

  const limpiarCampos = () => {
    setPeso('');
    setAltura('');
    setResultado(null);
  };

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a || p <= 0 || a <= 0) {
      Alert.alert("Error", "Ingrese valores válidos para peso y altura.");
      return;
    }

    Keyboard.dismiss();
    const imc = p / (a * a);
    const imcRedondeado = imc.toFixed(2);

    let nivel = '';
    let color = '';

    if (imc < 18.5) {
      nivel = 'Bajo peso';
      color = '#f1c40f';
    } else if (imc < 25) {
      nivel = 'Peso normal';
      color = '#2ecc71';
    } else if (imc < 30) {
      nivel = 'Sobrepeso';
      color = '#e67e22';
    } else {
      nivel = 'Obesidad';
      color = '#e74c3c';
    }

    const nuevoResultado = {
      imc: imcRedondeado,
      nivel,
      mensaje: `Tu IMC es ${imcRedondeado}`,
      color,
    };

    const registro = {
      fecha: new Date().toLocaleString(),
      imc: imcRedondeado,
      nivel
    };

    const nuevoHistorial = [registro, ...historial];
    setResultado(nuevoResultado);
    setHistorial(nuevoHistorial);
    guardarHistorial(nuevoHistorial);
  };

  const renderGrafico = () => {
    if (historial.length < 2) return null;
    return (
      <LineChart
        data={{
          labels: historial.map((item, index) => index + 1),
          datasets: [{ data: historial.map(item => parseFloat(item.imc)) }]
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={{
          marginVertical: 20,
          borderRadius: 16,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <Image source={require('../../assets/icon.png')} style={styles.imagen} />
      <TextInput
        style={styles.input}
        placeholder="Peso en kg"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura en metros"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <View style={styles.botones}>
        <TouchableOpacity style={styles.boton} onPress={calcularIMC}>
          <Text style={styles.textoBoton}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.botonLimpiar]} onPress={limpiarCampos}>
          <Text style={styles.textoBoton}>Limpiar</Text>
        </TouchableOpacity>
      </View>
      {resultado && <ResultadoIMC resultado={resultado} />}
      {renderGrafico()}
      <HistorialIMC historial={historial} />
    </View>
  );
};

export default CalculadoraIMC;
