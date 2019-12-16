import React from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Grid } from '@material-ui/core';

import Navbar from './components/navbar.component.jsx';
import Sidebar from './components/sidebar.component.jsx';
import NewsView from './components/news-view.component.jsx';
import StockView from './components/stock-view.component.jsx';
import CreateUser from './components/create-user.component.jsx';
import UserSignIn from './components/sign-in.component.jsx';


function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
    <div className="app">
      <Grid className="sidebarGrid" item sm={4}>
        <Navbar />
        <Sidebar />
      </Grid>

      <Grid className="mainViewGrid" item sm={8}>
        <Route path={process.env.PUBLIC_URL + '/stocks'} component={StockView} />
        <Route path={process.env.PUBLIC_URL + '/'} exact component={NewsView} /> 
        <Route path={process.env.PUBLIC_URL + '/create-user'} exact component={CreateUser} />
        <Route path={process.env.PUBLIC_URL + '/sign-in'} exact component={UserSignIn} />
      </Grid>
      </div>
    </HashRouter>
    
  )
}

export default App;

