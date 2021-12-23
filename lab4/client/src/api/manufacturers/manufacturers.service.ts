import { CreateManufacturerDto, Manufacturer } from 'types/manufacturers.types';

import { fetchAllManufacturers } from './fetchAllManufacturers';
import { fetchCreateManufacturer } from './fetchCreateManufacturer';
import { fetchDeleteManufacturerByPk } from './fetchDeleteManufacturerByPk';
import { fetchUpdateManufacturerByPk } from './fetchUpdateManufacturerByPk';
import { ManufacturersApi } from './routes';

class ManufacturersService implements ManufacturersApi {
    getAll(): Promise<Manufacturer[]> {
        return fetchAllManufacturers();
    }

    create(dto: CreateManufacturerDto): Promise<Manufacturer> {
        return fetchCreateManufacturer(dto);
    }

    deleteByPk(pk: number): Promise<Manufacturer> {
        return fetchDeleteManufacturerByPk(pk);
    }

    updateByPk(pk: number, dto: Partial<Manufacturer>): Promise<Manufacturer> {
        return fetchUpdateManufacturerByPk(pk, dto);
    }
}

export const manufacturersService = new ManufacturersService();
