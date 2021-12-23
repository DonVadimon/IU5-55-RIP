import { axiosInstance } from 'api/axios';
import { Manufacturer } from 'types/manufacturers.types';

import { MANUFACTURERS_ROUTES } from './routes';

export const fetchDeleteManufacturerByPk = (pk: number): Promise<Manufacturer> =>
    axiosInstance.delete<Manufacturer>(MANUFACTURERS_ROUTES.deleteByPk(pk)).then((response) => response.data);
