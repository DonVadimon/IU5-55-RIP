import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import { carsService } from 'api/car/car.service';
import cnBind, { Argument } from 'classnames/bind';
import { useAppContext } from 'hooks/useAppContext';
import { CreateCarDto } from 'types/cars.types';

import { Input } from 'components/Input';

import { CarFormProps } from './CarForm.types';

import styles from './CarForm.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const CarForm = ({ initialValues, pk }: CarFormProps) => {
    const { manufacturers, setLoaded } = useAppContext();

    const history = useHistory();

    const onSubmit = useCallback(
        (values: CreateCarDto) =>
            (pk ? carsService.update(pk, values) : carsService.create(values))
                .then(() => setLoaded(false))
                .then(() => history.push('/')),
        [history, pk, setLoaded],
    );

    return (
        <Form<CreateCarDto> onSubmit={onSubmit} initialValues={{ ...initialValues, main_image: undefined }}>
            {({ handleSubmit }) => (
                <div className={cx('container')}>
                    <p>name</p>
                    <Input required name={'name'} />
                    <p>price</p>
                    <Input type="number" required name={'price'} />
                    <p>description</p>
                    <Input required name={'description'} />
                    <p>score</p>
                    <Input required name={'score'} />
                    <p>manufacturer</p>
                    <Field type="select" name="manufacturer">
                        {({ input }) => (
                            <select {...input}>
                                {manufacturers.map(({ name, pk }) => (
                                    <option key={pk} value={pk}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        )}
                    </Field>
                    <button type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            )}
        </Form>
    );
};
