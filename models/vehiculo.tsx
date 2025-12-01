export type Vehiculo = {
    marca: string;
    modelo: string;
    placa: string;
    dueño: string;
    año: string;
    tipoGasolina: string;
}

export const emptyVehicle: Vehiculo = {
    marca: '',
    modelo: '',
    placa: '',
    dueño: '',
    año: '',
    tipoGasolina: ''
}
