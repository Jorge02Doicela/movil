//Librerias para la navegación
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importo pantallas
import CalculadoraIMC from "./src/pantallas/calculadoraIMC";
import { Inicio } from "./src/pantallas/inicio/inicio";

// Instanciar el Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} options={{ title: "Inicio" }} />
        <Stack.Screen name="Calculadora IMC" component={CalculadoraIMC} options={{ title: "Calculadora IMC" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}