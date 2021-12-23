import React from 'react';
import { useAppContext } from 'hooks/useAppContext';

import { CarCard } from 'components/CarCard';

export const MainPage = () => {
    const { cars } = useAppContext();

    return (
        <div>
            {cars.map((car) => (
                <CarCard key={`${car.pk}`} car={car} />
            ))}
        </div>
    );
};
