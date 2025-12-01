import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { FromButton } from '../components/FormButton'
import { Vehiculo } from '../models/vehiculo'

interface Props {
    vehiculo: Vehiculo;
    onRegister: () => void;
    onBack: () => void;
}

export const VehiculoSummaryScreen = ({ vehiculo, onRegister, onBack }: Props) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.subtitle}>Resumen del registro</Text>
            
            <View style={styles.summaryContainer}>
                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Marca:</Text>
                    <Text style={styles.value}>{vehiculo.marca}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Modelo:</Text>
                    <Text style={styles.value}>{vehiculo.modelo}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Placa:</Text>
                    <Text style={styles.value}>{vehiculo.placa}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Nombre del dueño:</Text>
                    <Text style={styles.value}>{vehiculo.dueño}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Año:</Text>
                    <Text style={styles.value}>{vehiculo.año}</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.label}>Tipo de gasolina:</Text>
                    <Text style={styles.value}>{vehiculo.tipoGasolina}</Text>
                </View>
            </View>

            <View >
                <FromButton
                    label="Regresar"
                    onPress={onBack}
                />
                <FromButton
                    label="Registrar"
                    onPress={onRegister}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
    },
    summaryContainer: {
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 16,
        gap: 12,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#495057',
    },
    value: {
        fontSize: 14,
        color: '#212529',
    }
})
