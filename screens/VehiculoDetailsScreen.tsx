import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FormInput } from '../components/FormInput'
import { FromButton } from '../components/FormButton'
import { Vehiculo } from '../models/vehiculo'

interface Props {
    vehiculo: Vehiculo;
    onChange: (field: keyof Vehiculo, value: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export const VehiculoDetailsScreen = ({ vehiculo, onChange, onNext, onBack }: Props) => {

    const isValid = 
        vehiculo.placa.trim() !== '' && 
        vehiculo.dueño.trim() !== '' && 
        vehiculo.año.trim() !== '' && 
        vehiculo.tipoGasolina.trim() !== '';

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Detalles del vehículo</Text>
            
            <FormInput
                label="Placa"
                value={vehiculo.placa}
                onChangeText={(text) => onChange('placa', text)}
                placeholder="Ingrese la placa"
            />

            <FormInput
                label="Nombre del dueño"
                value={vehiculo.dueño}
                onChangeText={(text) => onChange('dueño', text)}
                placeholder="Ingrese el nombre del dueño"
            />

            <FormInput
                label="Año"
                value={vehiculo.año}
                onChangeText={(text) => onChange('año', text)}
                placeholder="Ingrese el año"
                keyboardType="numeric"
            />

            <FormInput
                label="Tipo de gasolina"
                value={vehiculo.tipoGasolina}
                onChangeText={(text) => onChange('tipoGasolina', text)}
                placeholder="Ingrese el tipo de gasolina"
            />

            <View >
                <FromButton
                    label="Regresar"
                    onPress={onBack}
                    style={{ marginBottom: 12 }}
                />
                <FromButton
                    label="Continuar"
                    onPress={onNext}
                    disabled={!isValid}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    }
})
