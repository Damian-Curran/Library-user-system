import React, { Component } from 'react';

class Logout extends Component {

    componentDidMount() {
        this.logout();
    }

    logout() {
        localStorage.removeItem('authToken');
        this.props.history.push('/Login');
    }

    render() {
        return (
            <div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">You are logged out</label>
                </div>

                <button value="Add"> Home </button>

            </div>
        )
    }
}

export default Logout;