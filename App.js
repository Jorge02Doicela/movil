import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CalculadoraIMC from './src/pantallas/calculadoraIMC';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CalculadoraIMC />
      </ScrollView>
    </SafeAreaView>
  );
}
