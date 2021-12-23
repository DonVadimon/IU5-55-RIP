import { axiosInstance } from 'api/axios';
import { Car } from 'types/cars.types';

import { CAR_ROUTES } from './routes';

export const fetchAllCars = (): Promise<Car[]> =>
    axiosInstance.get<Car[]>(CAR_ROUTES.getAll()).then((response) => response.data);
