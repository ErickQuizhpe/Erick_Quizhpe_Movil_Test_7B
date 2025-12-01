import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { FromButton } from '../components/FormButton'
import { Vehiculo } from '../models/vehiculo'

interface Props {
    vehiculos: Vehiculo[];
    onRegisterAnother: () => void;
}

export const RegisteredVehiclesScreen = ({ vehiculos, onRegisterAnother }: Props) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.subtitle}>Vehículos registrados</Text>
            
            {vehiculos.length === 0 ? (
                <Text style={styles.emptyText}>No hay vehículos registrados</Text>
            ) : (
                <View style={styles.tableContainer}>
                    {/* Header */}
                    <View style={styles.tableHeader}>
                        <Text style={[styles.headerCell, styles.placaColumn]}>Placa</Text>
                        <Text style={[styles.headerCell, styles.duenoColumn]}>Dueño</Text>
                        <Text style={[styles.headerCell, styles.marcaColumn]}>Marca</Text>
                        <Text style={[styles.headerCell, styles.modeloColumn]}>Modelo</Text>
                    </View>

                    {/* Rows */}
                    {vehiculos.map((vehiculo, index) => (
                        <View key={index} style={[styles.tableRow, index % 2 === 0 && styles.tableRowEven]}>
                            <Text style={[styles.cell, styles.placaColumn]}>{vehiculo.placa}</Text>
                            <Text style={[styles.cell, styles.duenoColumn]}>{vehiculo.dueño}</Text>
                            <Text style={[styles.cell, styles.marcaColumn]}>{vehiculo.marca}</Text>
                            <Text style={[styles.cell, styles.modeloColumn]}>{vehiculo.modelo}</Text>
                        </View>
                    ))}
                </View>
            )}

            <FromButton
                label="Registrar otro"
                onPress={onRegisterAnother}
            />
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
    emptyText: {
        fontSize: 14,
        color: '#6c757d',
        textAlign: 'center',
        marginVertical: 24,
    },
    tableContainer: {
        borderWidth: 1,
        borderColor: '#dee2e6',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 24,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    headerCell: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
    },
    tableRowEven: {
        backgroundColor: '#f8f9fa',
    },
    cell: {
        fontSize: 14,
        color: '#212529',
    },
    placaColumn: {
        flex: 1,
    },
    duenoColumn: {
        flex: 1.5,
    },
    marcaColumn: {
        flex: 1,
    },
    modeloColumn: {
        flex: 1,
    }
})
