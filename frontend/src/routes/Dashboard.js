import React, {Component} from 'react';
import DashboardContainer from '../components/LoggedIn/DashboardContainer';
import '../css/common.css';
import '../css/dashboard.css';
class Dashboard extends Component {
    render(){
        return <div><DashboardContainer></DashboardContainer></div>
    }
}
export default Dashboard;