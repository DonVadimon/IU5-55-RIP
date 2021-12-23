import React from 'react';
import { Field } from 'react-final-form';
import cnBind, { Argument } from 'classnames/bind';

import { InputProps } from './Input.types';

import styles from './Input.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const Input = ({ className, name, required = false, ...props }: InputProps) => (
    <Field name={name} validate={(value) => (!value && required ? 'Required' : undefined)}>
        {({ input }) => <input {...input} className={cx('input', className)} {...props} />}
    </Field>
);
