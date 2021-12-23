import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import { useAppContext } from 'hooks/useAppContext';

import { CarCard } from 'components/CarCard';
import { CarForm } from 'components/CarForm';

export const Details = () => {
    const { pk } = useParams<{ pk: string }>();

    const { cars } = useAppContext();

    const car = useMemo(() => cars.find(({ pk: _pk }) => _pk === Number(pk)), [cars, pk]);

    return (
        <div>
            {car ? (
                <div>
                    <CarCard car={car} />
                    <CarForm initialValues={car} pk={car.pk} />
                </div>
            ) : (
                <CarForm />
            )}
        </div>
    );
};
