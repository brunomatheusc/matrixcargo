import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repositories from './pages/Repositories';
import Languages from './pages/Languages';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Main } />
                <Route path="/languages/:language" component={ Languages } />
                <Route path="/repository/:repository" component={ Repositories } />
            </Switch>
        </BrowserRouter>
    );
}