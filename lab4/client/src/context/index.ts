import { createContext } from 'react';
import { Car } from 'types/cars.types';

export type AppContext = {
    cars: Car[];
    loaded: boolean;
};

export const AppContext = createContext<AppContext>({ cars: [], loaded: false });
