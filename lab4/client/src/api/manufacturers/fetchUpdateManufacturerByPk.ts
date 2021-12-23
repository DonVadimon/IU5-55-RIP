import { axiosInstance } from 'api/axios';
import { Manufacturer, UpdateManufacturerDto } from 'types/manufacturers.types';

import { MANUFACTURERS_ROUTES } from './routes';

export const fetchUpdateManufacturerByPk = (pk: number, dto: UpdateManufacturerDto): Promise<Manufacturer> =>
    axiosInstance.put<Manufacturer>(MANUFACTURERS_ROUTES.updateByPk(pk), dto).then((response) => response.data);
