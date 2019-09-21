import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './Home';

import Book from './BookComp/Book';
import AddBook from './BookComp/AddBook';
import BookInfo from './BookComp/BookInfo';

import User from './UserComp/User';
import AddUser from './UserComp/AddUser';
import UserInfo from './UserComp/UserInfo';

import Login from './UserAccess/Login';
import Logout from './UserAccess/Logout';
import {PrivateRoute} from './UserAccess/PrivateRoute';

import NoMatch from './NoMatch';

const Main = ()=>(
    <div>
        <main>
            <Route path="/" component={Home}/>

            <Switch>
                <Route exact path="/"/>

                <Route exact path="/book" component={Book}/>
                <Route exact path="/addBook" component={AddBook}/>
                <Route exact path="/book/:id" component={BookInfo}/>

                <PrivateRoute exact path="/user" component={User}/>
                <Route exact path="/addUser" component={AddUser}/>
                <Route exact path="/user/:id" component={UserInfo}/>

                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Logout" component={Logout}/>

                <Route component={NoMatch}/>
            </Switch>

        </main>
    </div>
)

export default Main;