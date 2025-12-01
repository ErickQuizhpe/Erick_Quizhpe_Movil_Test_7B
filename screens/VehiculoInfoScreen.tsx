import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FormInput } from '../components/FormInput'
import { FromButton } from '../components/FormButton'
import { Vehiculo } from '../models/vehiculo'

interface Props {
    vehiculo: Vehiculo;
    onChange: (field: keyof Vehiculo, value: string) => void;
    onNext: () => void;
}

export const VehiculoInfoScreen = ({ vehiculo, onChange, onNext }: Props) => {

    const isValid = vehiculo.marca.trim() !== '' && vehiculo.modelo.trim() !== '';

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Datos del vehículo</Text>
            
            <FormInput
                label="Marca"
                value={vehiculo.marca}
                onChangeText={(text) => onChange('marca', text)}
                placeholder="Ingrese la marca"
            />

            <FormInput
                label="Modelo"
                value={vehiculo.modelo}
                onChangeText={(text) => onChange('modelo', text)}
                placeholder="Ingrese el modelo"
            />

            <FromButton
                label="Continuar"
                onPress={onNext}
                disabled={!isValid}
            />
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