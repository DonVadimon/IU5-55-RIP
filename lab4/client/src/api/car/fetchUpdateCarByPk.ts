import { axiosInstance } from 'api/axios';
import { Car, UpdateCarDto } from 'types/cars.types';

import { CAR_ROUTES } from './routes';

export const fetchUpdateCarByPk = (pk: number, dto: UpdateCarDto): Promise<Car> =>
    axiosInstance.put<Car>(CAR_ROUTES.updateByPk(pk), dto).then((response) => response.data);
