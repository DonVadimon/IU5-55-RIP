import { Car, CreateCarDto, UpdateCarDto } from 'types/cars.types';

import { fetchAllCars } from './fetchAllCars';
import { fetchCreateCar } from './fetchCreateCar';
import { fetchDeleteCarByPk } from './fetchDeleteCarByPk';
import { fetchUpdateCarByPk } from './fetchUpdateCarByPk';
import { CarsApi } from './routes';

class CarsService implements CarsApi {
    create(dto: CreateCarDto): Promise<Car> {
        return fetchCreateCar(dto);
    }

    deleteByPk(pk: number): Promise<Car> {
        return fetchDeleteCarByPk(pk);
    }

    updateByPk(pk: number, dto: Partial<Car>): Promise<Car> {
        return fetchUpdateCarByPk(pk, dto);
    }

    getAll(): Promise<Car[]> {
        return fetchAllCars();
    }

    update(pk: number, dto: UpdateCarDto): Promise<Car> {
        return fetchUpdateCarByPk(pk, dto);
    }
}

export const carsService = new CarsService();
