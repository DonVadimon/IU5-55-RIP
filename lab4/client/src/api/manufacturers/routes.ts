import { CreateManufacturerDto, Manufacturer, UpdateManufacturerDto } from 'types/manufacturers.types';
import { APIRoutes } from 'types/routes.types';

export interface ManufacturersApi {
    getAll: () => Promise<Manufacturer[]>;
    create: (dto: CreateManufacturerDto) => Promise<Manufacturer>;
    deleteByPk: (pk: number) => Promise<Manufacturer>;
    updateByPk: (pk: number, dto: UpdateManufacturerDto) => Promise<Manufacturer>;
}

export const MANUFACTURERS_PREFIX = '/manufacturers';

export const MANUFACTURERS_ROUTES: APIRoutes<ManufacturersApi> = {
    getAll: () => `${MANUFACTURERS_PREFIX}/`,
    create: () => `${MANUFACTURERS_PREFIX}/`,
    deleteByPk: (pk = ':pk') => `${MANUFACTURERS_PREFIX}/${pk}/`,
    updateByPk: (pk = ':pk') => `${MANUFACTURERS_PREFIX}/${pk}/`,
};
