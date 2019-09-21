import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor() {
        super();
        this.state = {
            token : localStorage.getItem('authToken')
        }
    }

    componentDidUpdate(){
        if(this.state.token !== localStorage.getItem('authToken')){
            this.setState({token : localStorage.getItem('authToken')})
        }
    }

    render(){
        return (
            <div>
            <h1>Home</h1>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/addBook">Add Book(admin or same function as user returns book)</Link>
            </div>
            <div>
                <Link to="/book">View all books</Link>
            </div>
            <div>
                <Link to="/addUser">Add User(sign up)</Link>
            </div>
            <div>
                <Link to="/user">View all users(admin only)</Link>
            </div>
            <div>
                <Link to="/user/profile">View profile</Link>
            </div>
            <div>
                {(this.state.token == null) ? (<Link to="/login">Login</Link>) : (<Link to="/logout">Logout</Link>)}
            </div>
        </div>
        )
    }
}

export default Home;