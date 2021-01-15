import react from 'react';
import { BrowserRouter, Ruute, Link, NavLink } from 'react-router-dom'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function Dashboard()
{
return(
  <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                HOME
            </NavText>
        </NavItem>
        <NavItem eventKey="dashboard">
            <NavIcon>
            <i class="fa fa-tachometer" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                DASHBOARD
            </NavText>
        </NavItem>
        <NavItem eventKey="calendar">
            <NavIcon>
            <i class="fa fa-calendar" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
               CALENDER
            </NavText>
        </NavItem>
        <NavItem eventKey="teams">
            <NavIcon>
            <i class="fa fa-users"  style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                TEAMS
            </NavText>
        </NavItem>
        <NavItem eventKey="projects">
            <NavIcon>
            <i class="fa fa-file-text" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                PROJECTS
            </NavText>
        </NavItem>
        
        <NavItem eventKey="reports">
            <NavIcon>
            <i class="fa fa-bar-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                REPORTS
            </NavText>
            <NavItem eventKey="reports/summery">
                <NavText>
                    Summery
                </NavText>
            </NavItem>
            <NavItem eventKey="reports/detailed">
                <NavText>
                  Detailed
                </NavText>
                </NavItem>
                <NavItem eventKey="reports/weekly">
                <NavText>
                 Weekly
                </NavText>
                </NavItem>
                <NavItem eventKey="reports/shared">
                <NavText>
                Shared
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
);
}
export default Dashboard;