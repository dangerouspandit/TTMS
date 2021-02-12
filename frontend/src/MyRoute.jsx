import React from 'react';
import { Switch, Route} from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';
import ManagerDashboard from './ManagerDashboard';
import TableApproval from './TableApproval';

const MyRoute = () => {
    return (
    <>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/Dashboard' component={Dashboard}/>
        <Route exact path='/ManagerDashboard' component={ManagerDashboard}/>
        <Route exact path='/tableapproval' component={TableApproval}/>
 
    </Switch>
   
    </>
    );
}

export default MyRoute;