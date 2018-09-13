import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'
import Home from './components/home/index'
import Login from './pages/login/index'
import HomePage from './pages/homePage/index'
import Analysis from './pages/dashboard/analysis'
import Monitor from './pages/dashboard/monitor'
import Workplace from './pages/dashboard/workplace'
import BasicForm from './pages/form/basic-form'
import AdvancedForm from './pages/form/advanced-form'
import StepForm from './pages/form/step-form'
import PatientList from './pages/patientList/index'

class RouterPage extends React.Component{
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/" render={ () =>
            <Home>
              <Switch>
                <Route path="/homePage" component={HomePage} />
                <Route path="/analysis" component={Analysis} />
                <Route path="/monitor" component={Monitor} />
                <Route path="/workplace" component={Workplace} />
                <Route path="/basic-form" component={BasicForm} />
                <Route path="/advanced-form" component={AdvancedForm} />
                <Route path="/step-form" component={StepForm} />
                <Route path="/patientList" component={PatientList} />
              </Switch>
            </Home>
          } />
        </App>
      </Router>
    )
  }
}

export default RouterPage;
