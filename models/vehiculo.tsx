export type Vehiculo = {
    marca: string;
    modelo: string;
    placa: string;
    dueno: string;
    ano: string;
    tipoGasolina: string;
}

export const emptyVehicle: Vehiculo = {
    marca: '',
    modelo: '',
    placa: '',
    dueno: '',
    ano: '',
    tipoGasolina: ''
}
