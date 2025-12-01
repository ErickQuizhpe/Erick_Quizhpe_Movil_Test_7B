import { useState } from 'react'
import { emptyVehicle, Vehiculo } from '../models/vehiculo'

export const TOTAL_STEPS = 3;

export const useVehiculoForm = () => {
  
    const [vehicle, setVehicle] = useState<Vehiculo>(emptyVehicle);
    const [step, setStep] = useState(0);
    const [registeredVehicles, setRegisteredVehicles] = useState<Vehiculo[]>([]);
    const [showList, setShowList] = useState(false);

    const goToStep = (target: number) => {
        setStep(target);
    };

    const updateField = (field: keyof Vehiculo, value: string) => {
        setVehicle(prev => ({
                ...prev,
                [field]: value
        }));
    }

    const nextStep = () => goToStep(step + 1);
    
    const prevStep = () => goToStep(step - 1);
    
    const registerVehicle = () => {
        setRegisteredVehicles(prev => [...prev, vehicle]);
        setShowList(true);
    }

    const reset = () => {
        setVehicle(emptyVehicle);
        setStep(0);
        setShowList(false);
    }
  
    return {
        vehicle, 
        step, 
        nextStep, 
        prevStep, 
        updateField, 
        reset, 
        registerVehicle,
        registeredVehicles,
        showList
    };
}

