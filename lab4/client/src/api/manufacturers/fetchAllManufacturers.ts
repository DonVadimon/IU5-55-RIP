import { axiosInstance } from 'api/axios';
import { Manufacturer } from 'types/manufacturers.types';

import { MANUFACTURERS_ROUTES } from './routes';

export const fetchAllManufacturers = (): Promise<Manufacturer[]> =>
    axiosInstance.get<Manufacturer[]>(MANUFACTURERS_ROUTES.getAll()).then((response) => response.data);
