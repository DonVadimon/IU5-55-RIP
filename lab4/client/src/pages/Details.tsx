import React from 'react';
import { useParams } from 'react-router';
import { useAppContext } from 'hooks/useAppContext';

import { CarCard } from 'components/CarCard';

export const Details = () => {
    const { id } = useParams<{ id: string }>();

    const car = useAppContext().cars.find(({ id: _id }) => _id === Number(id));

    return <div>{car ? <CarCard car={car} /> : 'not found'}</div>;
};
