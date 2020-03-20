import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User2 from './components/users/User';
import axios from 'axios';
import Search2 from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css';


class App extends Component {

    state = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: null,

    };

    /*componentDidMount() {
      axios.get('https://api.github.com/users')
        .then(res => console.log(res.data));
    }*/
    /*async componentDidMount() {
  
      // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
      this.setState({ loading: true });
  
      const res = await axios.get(`https://api.github.com/users?client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      //console.log(res.data);
  
      this.setState({ users: res.data, loading: false });
    };*/

    searchUsers = async (text) => {
        //console.log(text);
        this.setState({ loading: true });

        const res = await axios.get(`https://api.github.com/search/users?q=${text}
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        //console.log(res.data);

        this.setState({ users: res.data.items, loading: false });
    };

    //Get single github user

    getUser = async (username) => {
        this.setState({ loading: true });

        const res = await axios.get(`https://api.github.com/users/${username}?
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        //console.log(res.data);

        this.setState({ user: res.data, loading: false });
    }

    //Get the repos of a user

    getUserRepos = async (username) => {
        this.setState({ loading: true });

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=35&sort=created:asc&client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
            }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        //console.log(res.data);

        this.setState({ repos: res.data, loading: false });
    }

    //Clean users from a state

    cleanUsers = () => {
        console.log(123);
        this.setState({ users: [], loading: false });
    };

    //Set an Alert

    setAlert = (msg, type) => {
        this.setState({ alert: { msg, type } });
        setTimeout(() => this.setState({ alert: null }), 2000);
    }

    render() {
        const { users, loading, alert, user, repos } = this.state;
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
                                            <Search2 searchUsers={this.searchUsers}
                                                cleanUsers={this.cleanUsers}
                                                showClear={users.length > 0 ? true : false}
                                                setAlert={this.setAlert}
                                            />
                                            <Users loading={loading} users={users} />
                                        </Fragment>
                                    )
                                } />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/user/:login' render={props => (
                                <User2
                                    {...props}
                                    getUser={this.getUser}
                                    getUserRepos={this.getUserRepos}
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
}
export default App;

/*function App() {
  return (
    <React.Fragment>
      <h1>  Hello from react  </h1>
      <label htmlfor='name'>Name</label>
    </React.Fragment>
  );
}*/

/*class App extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement('h1', null, 'Hello world')
    );

  }
}*/

/*class App extends Component {


  foos = () => 'Bars';

  render() {
    const name = 'Malia Mahdaoui';

    const foo = () => 'Bar'; /* Same as Function foo(){ $var = 'Bar'; return $var;}*/

/*const loading = false;
/*
    if (loading) {
      return <h4>Loading...</h4>;
    }*/

/* const showName = false;

 return (
   <div>
     <h1>Hello App from Malia's Computer</h1>
     <h2>- How are you ?</h2>
     <h3>What's your name?</h3>
     <p>My name is <b>{name.toUpperCase()}</b></p>
     <p>1+1 = <b>{1 + 1}</b></p>
     <p>Hello function <b>{foo()}</b>.</p>
     <p>Hello function 2 <b>{this.foos()}</b>.</p>
     {loading ? <h4>Loading...</h4> : <h1>Hello again {name} </h1>}
     {/*Another methode*//*}
{loading ? <h4>Loading...</h4> : <h1>Hello again {showName ? name : null} </h1>}
{/**  Or *//*}
{loading ? <h4>Loading...</h4> : <h1>Hello again {showName && name} </h1>}
</div>
);
}
}*/
