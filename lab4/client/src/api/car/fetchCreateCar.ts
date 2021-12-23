import { axiosInstance } from 'api/axios';
import { Car, CreateCarDto } from 'types/cars.types';

import { CAR_ROUTES } from './routes';

export const fetchCreateCar = (dto: CreateCarDto): Promise<Car> =>
    axiosInstance.post<Car>(CAR_ROUTES.create(), dto).then((response) => response.data);
