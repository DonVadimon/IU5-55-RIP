import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from 'context';
import { Details } from 'pages/Details';
import { MainPage } from 'pages/MainPage';
import { Car } from 'types/cars.types';

import { Spinner } from 'components/Spinner';
import { BACKEND_URI } from 'config';

import './App.css';

export const App = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(BACKEND_URI)
            .then<{ cars: Car[] }>((data) => data.json())
            .then(({ cars }) => {
                setCars(cars);
                setLoaded(true);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <AppContext.Provider value={{ cars, loaded }}>
            <BrowserRouter>
                {loaded ? (
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route path="/:id">
                            <Details />
                        </Route>
                    </Switch>
                ) : (
                    <Spinner />
                )}
            </BrowserRouter>
        </AppContext.Provider>
    );
};
