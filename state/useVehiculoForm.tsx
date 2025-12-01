import { useState } from 'react'
import { emptyVehicle, Vehiculo } from '../models/vehiculo'

export const TOTAL_STEPS = 3;

export const useVehiculoForm = () => {
  
    const [vehiculo, setVehiculo] = useState<Vehiculo>(emptyVehicle);
    const [step, setStep] = useState(0);
    const [registeredVehiculos, setRegisteredVehiculos] = useState<Vehiculo[]>([]);
    const [showList, setShowList] = useState(false);

    const goToStep = (target: number) => {
        setStep(target);
    };

    const updateField = (field: keyof Vehiculo, value: string) => {
        setVehiculo(prev => ({
                ...prev,
                [field]: value
        }));
    }

    const nextStep = () => goToStep(step + 1);
    
    const prevStep = () => goToStep(step - 1);
    
    const registerVehiculo = () => {
        setRegisteredVehiculos(prev => [...prev, vehiculo]);
        setShowList(true);
    }

    const reset = () => {
        setVehiculo(emptyVehicle);
        setStep(0);
        setShowList(false);
    }
  
    return {
        vehiculo, 
        step, 
        nextStep, 
        prevStep, 
        updateField, 
        reset, 
        registerVehiculo,
        registeredVehiculos,
        showList
    };
}

