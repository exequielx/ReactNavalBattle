import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import Game from '../components/game/Game';
import Setup from '../components/setup/Setup';

const NotFound = () => <div>Page Not found... Fucking idiot</div>


const createRoutes = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/setup" component={Setup} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default createRoutes;
