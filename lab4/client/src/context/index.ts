import React, { createContext } from 'react';
import { Car } from 'types/cars.types';
import { Manufacturer } from 'types/manufacturers.types';

export type AppContext = {
    cars: Car[];
    manufacturers: Manufacturer[];
    loaded: boolean;
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
    error: boolean;
};

export const AppContext = createContext<AppContext>({
    cars: [],
    manufacturers: [],
    loaded: false,
    setLoaded: () => undefined,
    error: false,
});
