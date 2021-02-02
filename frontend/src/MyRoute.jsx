import React from 'react';
import { Switch, Route} from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';
import Login from './Login';

const MyRoute = () => {
    return (
    <>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/Dashboard' component={Dashboard}/>
        <Route exact path='/login' component={Login}/>

    </Switch>
   
    </>
    );
}

export default MyRoute;