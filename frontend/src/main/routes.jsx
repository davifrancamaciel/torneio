import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../components/dashboard/Dashboard'
import Time from '../components/time/Time'
import Jogador from '../components/jogador/Jogador'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/time' component={Time} />
            <Route path='/jogador' component={Jogador} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)