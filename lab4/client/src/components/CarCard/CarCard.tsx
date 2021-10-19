import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import cnBind, { Argument } from 'classnames/bind';

import { Image } from 'components/Image';

import { CarCardProps } from './CarCard.types';

import styles from './CarCard.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const CarCard = ({ car }: CarCardProps): JSX.Element => {
    const history = useHistory();

    const onClick = useCallback(() => history.push(`/${car.id}`), [car.id, history]);

    return (
        <div className={cx('container')} onClick={onClick}>
            <Image className={cx('image')} src={car.main_image} alt={car.name} />
            <div className={cx('info')}>
                <h1>{car.name}</h1>
                <p className={cx('description')}>{car.description}</p>
                <p className={cx('score')}>Оценка экспертов: {car.score} из 10</p>
            </div>
        </div>
    );
};
