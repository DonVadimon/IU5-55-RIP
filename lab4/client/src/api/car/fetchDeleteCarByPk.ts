import { axiosInstance } from 'api/axios';
import { Car } from 'types/cars.types';

import { CAR_ROUTES } from './routes';

export const fetchDeleteCarByPk = (pk: number): Promise<Car> =>
    axiosInstance.delete<Car>(CAR_ROUTES.deleteByPk(pk)).then((response) => response.data);
