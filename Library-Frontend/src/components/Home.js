import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('authToken')
        }
    }

    componentDidUpdate() {
        if (this.state.token !== localStorage.getItem('authToken')) {
            this.setState({ token: localStorage.getItem('authToken') })
        }
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <div>
                    <Link to="/">Home</Link>
                </div>
                {(this.state.token.admin == 1) ? (
                    <span>
                        <div>
                            <Link to="/addBook">Add Book</Link>
                        </div>
                        <div>
                            <Link to="/user">View all users(admin only)</Link>
                        </div>
                    </span>
                ) : (
                        <span />
                    )}
                <div>
                    <Link to="/book">View all books</Link>
                </div>
                <div>
                    <Link to="/user">View all users(admin only)</Link>
                </div>
                <div>
                    <Link to="/user/profile">View profile</Link>
                </div>
                <div>
                    {(this.state.token == null) ? (
                        <span>
                            <div>
                                <Link to="/login">Login</Link>
                            </div>
                            <div>
                                <Link to="/addUser">Sign up</Link>
                            </div>
                        </span>
                    ) : (
                            <Link to="/logout">Logout</Link>
                        )}
                </div>
            </div>
        )
    }
}

export default Home;