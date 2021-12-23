import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { carsService } from 'api/car/car.service';
import { manufacturersService } from 'api/manufacturers/manufacturers.service';
import { AppContext } from 'context';
import { Details } from 'pages/Details';
import { MainPage } from 'pages/MainPage';
import { Car } from 'types/cars.types';
import { Manufacturer } from 'types/manufacturers.types';

import { Spinner } from 'components/Spinner';

import './App.css';

export const App = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const handleError = useCallback((error: Error) => {
        console.error(error);
        setError(true);
    }, []);

    useEffect(() => {
        if (!loaded) {
            carsService
                .getAll()
                .then((cars) => setCars(cars))
                .catch(handleError);
        }
    }, [handleError, loaded]);

    useEffect(() => {
        if (!loaded) {
            manufacturersService
                .getAll()
                .then((manufacturers) => setManufacturers(manufacturers))
                .catch(handleError);
        }
    }, [handleError, loaded]);

    useEffect(() => setLoaded(!!cars.length && !!manufacturers.length), [cars, manufacturers]);

    return (
        <AppContext.Provider value={{ cars, manufacturers, loaded, setLoaded, error }}>
            <BrowserRouter>
                <div className="navbar">
                    <Link to="/">Main Page</Link>
                    <Link to="/car/create">Create New Car</Link>
                </div>
                {loaded ? (
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route path="/car/:pk">
                            <Details />
                        </Route>
                        <Route path="/car/create">
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
