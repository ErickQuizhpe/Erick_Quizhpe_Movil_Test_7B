import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TOTAL_STEPS, useVehiculoForm } from './state/useVehiculoForm';
import { VehiculoInfoScreen } from './screens/VehiculoInfoScreen';

export default function App() {

const {vehiculo, updateField, step, nextStep, reset } = useVehiculoForm();

  const renderScreen = () => {
    if (step === 0) {
      return <VehiculoInfoScreen vehiculo={vehiculo} onChange={updateField} onNext={nextStep} />
    }
  }
return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de registro</Text>
        <Text style={styles.steps}>Paso {step + 1} de {TOTAL_STEPS}</Text>
        <View style={styles.card}>
          {renderScreen()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    padding: 24,
    gap: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
    card:{
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
    steps:{
    fontSize: 14,
    color: 'black',
  },
});

