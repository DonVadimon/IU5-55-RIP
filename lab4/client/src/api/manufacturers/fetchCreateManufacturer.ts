import { axiosInstance } from 'api/axios';
import { CreateManufacturerDto, Manufacturer } from 'types/manufacturers.types';

import { MANUFACTURERS_ROUTES } from './routes';

export const fetchCreateManufacturer = (dto: CreateManufacturerDto): Promise<Manufacturer> =>
    axiosInstance.post<Manufacturer>(MANUFACTURERS_ROUTES.create(), dto).then((response) => response.data);
