import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User2 from './components/users/User';
import axios from 'axios';
import Search2 from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

import './App.css';


const App = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert1] = useState(null);


    //Search GitHub Users

    const searchUsers = async (text) => {

        setLoading(true);

        const res = await axios.get(`https://api.github.com/search/users?q=${text}
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        //console.log(res.data);

        setUsers(res.data.items);
        setLoading(false);
    };

    //Get single github user

    const getUser = async (username) => {
        setLoading(true);

        const res = await axios.get(`https://api.github.com/users/${username}?
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        //console.log(res.data);

        setUser(res.data);
        setLoading(false);
    }

    //Get the repos of a user

    const getUserRepos = async (username) => {

        setLoading(true);

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=35&sort=created:asc&client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
            }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        //console.log(res.data);

        setRepos(res.data);
        setLoading(false);
    }

    //Clean users from a state

    const cleanUsers = () => {
        console.log(123);

        setUsers([]);
        setLoading(false);
    };

    //Set an Alert

    const setAlert = (msg, type) => {
        setAlert1({ msg, type });

        setTimeout(() => setAlert1(null), 2000)
    }

    return (
        <Router>
            <div className='App'>
                <nav className='navbar nav bg-danger'>
                    <Navbar />
                </nav>
                <div className='container'>
                    <Alert alert={alert} />
                    <Switch>
                        <Route exact path='/' render=
                            {
                                props => (
                                    <Fragment>
                                        <Search2 searchUsers={searchUsers}
                                            cleanUsers={cleanUsers}
                                            showClear={users.length > 0 ? true : false}
                                            setAlert={setAlert}
                                        />
                                        <Users loading={loading} users={users} />
                                    </Fragment>
                                )
                            } />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/user/:login' render={props => (
                            <User2
                                {...props}
                                getUser={getUser}
                                getUserRepos={getUserRepos}
                                user={user}
                                repos={repos}
                                loading={loading}
                            />
                        )} />
                    </Switch>

                </div>
            </div>
        </Router>
    );

}
export default App;