import { Car, CreateCarDto, UpdateCarDto } from 'types/cars.types';
import { APIRoutes } from 'types/routes.types';

export interface CarsApi {
    getAll: () => Promise<Car[]>;
    create: (dto: CreateCarDto) => Promise<Car>;
    deleteByPk: (pk: number) => Promise<Car>;
    updateByPk: (pk: number, dto: UpdateCarDto) => Promise<Car>;
}

export const CAR_PREFIX = '/cars';

export const CAR_ROUTES: APIRoutes<CarsApi> = {
    getAll: () => `${CAR_PREFIX}/`,
    create: () => `${CAR_PREFIX}/`,
    deleteByPk: (pk = ':pk') => `${CAR_PREFIX}/${pk}/`,
    updateByPk: (pk = ':pk') => `${CAR_PREFIX}/${pk}/`,
};
