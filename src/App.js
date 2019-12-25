import React, { useState } from 'react';
import './App.css';
import Nav from './component/layout/Nav';
import Home from './component/Pages/Home';
import UserDetails from './component/Pages/UserDetails';
import About from "./component/Pages/About";
import NotFound from "./component/Pages/NotFound";

import axios from "axios";
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const getUsers = async (userName) => {
    setLoading(true);
    const users = await axios.get(`https://api.github.com/search/users?q=${userName}`);
    setUsers(users.data.items);
    setLoading(false);
  }


  const getUserInfo = async (userName) => {
    setLoading(true);
    const user = await axios.get(`https://api.github.com/users/${userName}`);
    setUser(user.data);
    setLoading(false);
  }


  const getUserRepos = async (userName) => {
    setLoading(true);
    const repos = await axios.get(`https://api.github.com/users/${userName}/repos`);
    setRepos(repos.data);
    setLoading(false);
  }
  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch >

          <Route exact path="/" render={() => (
            <div className="container">
              <Home getUsers={getUsers}
                users={users}
                loading={loading} />
            </div>
          )} />

          <Route path="/users/:login" render={(props) => (
            <div className="container">
              <UserDetails {...props}
                getUserInfo={getUserInfo}
                getUserRepos={getUserRepos}
                loading={loading}
                user={user}
                repos={repos} />
            </div>
          )} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />

        </Switch >

      </Router>

    </div >
  );
}

export default App;
