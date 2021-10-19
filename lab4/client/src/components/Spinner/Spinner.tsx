import React from 'react';
import { spinner } from 'assets';
import cnBind, { Argument } from 'classnames/bind';

import styles from './Spinner.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const Spinner = () => {
    return (
        <div className={cx('spinner')}>
            <img src={spinner} alt="loading" />
        </div>
    );
};
