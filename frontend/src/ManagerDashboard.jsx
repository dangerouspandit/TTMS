import react, { useState } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import './index.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import TableApproval from './TableApproval';
import Query from './Query';
import { css } from '@emotion/react';
import Projects from './Projects';
import Reports from './Reports';
import Home from './Home';
import Details from './Details';

let count = 0;
function Dashboard() {
    const [data, setdata] = useState("home");
    const [mar, setmar] = useState("6%");

    const template = () => {
        switch (data) {
            case "approve":
                return <TableApproval />;
            case "query":
                return <Query />;
            case "projects":
                return <Projects />;
            case "reports":
                return <Reports />;
            case "home":
                return <Home />;
            case "details":
                return <Details />;
            default:
                return <h1>unable to render</h1>;
        }

    }
    return (
        <div>
            <SideNav
                onSelect={(selected) => {

                }} >

                <SideNav.Toggle onClick={() => {

                    if (count > 0) {
                        setmar('6%');
                        count = 0;
                    }
                    else {
                        setmar('17%');
                        count++;
                    }
                }} />


                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText ><a onClick={() => setdata("home")}>
                            HOME</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="dashboard">

                        <NavIcon>
                            <i class="fa fa-users" style={{ fontSize: '1.75em' }} onClick={() => setdata("details")} />
                        </NavIcon>
                        <NavText><a onClick={() => setdata("details")}>
                            EMPLOYEE DETAILS</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="calendar">
                        <NavIcon>
                            <i class="fa fa-check-circle" style={{ fontSize: '1.75em' }} onClick={() => setdata("approve")} onClick={() => setdata("approve")} />

                        </NavIcon>
                        <NavText><a onClick={() => setdata("approve")}>
                            APPROVAL
            </a></NavText>
                    </NavItem>
                    <NavItem eventKey="teams">
                        <NavIcon>
                            <i class="fa fa-question-circle" style={{ fontSize: '1.75em' }} onClick={() => setdata("query")} />
                        </NavIcon>
                        <NavText><a onClick={() => setdata("query")}>
                            QUERY
            </a></NavText>
                    </NavItem>
                    <NavItem eventKey="projects">
                        <NavIcon>
                            <i class="fa fa-file-text" style={{ fontSize: '1.75em' }} onClick={() => setdata("projects")} />
                        </NavIcon>
                        <NavText><a onClick={() => setdata("projects")}>
                            PROJECTS
                            </a>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="reports">
                        <NavIcon>
                            <i class="fa fa-bar-chart" style={{ fontSize: '1.75em' }} onClick={() => setdata("reports")} />
                        </NavIcon>
                        <NavText><a onClick={() => setdata("reports")}>
                            REPORTS
                            </a>
                        </NavText>
                        <NavItem eventKey="reports/summery">
                            <NavText><a onClick={() => setdata("reports")}>
                                Summery
                                </a>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="reports/detailed">
                            <NavText><a onClick={() => setdata("reports")}>
                                Detailed
                                </a>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="reports/weekly">
                            <NavText><a onClick={() => setdata("reports")}>
                                Weekly
                                </a>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="reports/shared">
                            <NavText><a onClick={() => setdata("reports")}>
                                Shared
                                </a>
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <Navbar className="bg-light" > <NavItem style={{ marginLeft: '90%' }}>Notifications</NavItem></Navbar>
            <div className="main" style={{ marginLeft: `${mar}` }}>
                {template()}
            </div>

        </div>

    );
}
export default Dashboard;