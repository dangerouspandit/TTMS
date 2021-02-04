import React from 'react';
import { Switch, Route} from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';

const MyRoute = () => {
    return (
    <>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/Dashboard' component={Dashboard}/>

    </Switch>
   
    </>
    );
}

export default MyRoute;