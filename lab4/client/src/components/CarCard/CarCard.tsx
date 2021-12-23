import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';
import { carsService } from 'api/car/car.service';
import { zhiga } from 'assets';
import cnBind, { Argument } from 'classnames/bind';
import { useAppContext } from 'hooks/useAppContext';

import { CarCardProps } from './CarCard.types';

import styles from './CarCard.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const CarCard = ({ car }: CarCardProps): JSX.Element => {
    const history = useHistory();

    const onClick = useCallback(() => history.push(`/car/${car.pk}`), [car.pk, history]);

    const { manufacturers, setLoaded } = useAppContext();

    const manufacturer = useMemo(
        () => manufacturers.find(({ pk }) => pk === car.manufacturer),
        [car.manufacturer, manufacturers],
    );

    const onDelete = useCallback(
        () => carsService.deleteByPk(car.pk).then(() => setLoaded(false)),
        [car.pk, setLoaded],
    );

    return (
        <div className={cx('container')}>
            <img className={cx('image')} src={car?.main_image ?? zhiga} alt={car.name} onClick={onClick} />
            <div className={cx('info')}>
                <h1>{car.name}</h1>
                <h2>Производитель {manufacturer?.name}</h2>
                <p className={cx('description')}>{car.description}</p>
                <p className={cx('score')}>Оценка экспертов: {car.score} из 10</p>
                <button type="button" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};
