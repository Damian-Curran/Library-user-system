import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            error: ""
        }
    }

    getUser(userEmail){
        let email = userEmail;
        axios.get('http://localhost:8080/user/profile/' + email).then(response=>{
            var user = response.data;
            localStorage.setItem('authToken', JSON.stringify(user));
            this.props.history.push('/');
        })
    }

    checkUser(user) {
        axios.request({
            method: 'POST',
            url: 'http://localhost:8080/user/verify',
            data: user
        }).then(res => {
            if(res.data === "Success"){
                this.getUser(user.email);
            }
            else{
                this.setState({ error: res.data });
            }
        }).catch(err => console.log(err))
    }

    onCheckSubmit(event) {
        const user = {
            email: this.refs.Email.value,
            password: this.refs.Password.value,
        }
        event.preventDefault();

        this.checkUser(user);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onCheckSubmit.bind(this)}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="email" placeholder="Email" ref="Email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="password" placeholder="Pasword" ref="Password" />
                        </div>
                    </div>

                    <input type="submit" value="Add" />

                    <div className="form-group row" >
                        <label className="col-sm-2 col-form-label" />
                        <div className="col-sm-10">
                            <div className="input-feedback">{this.state.error}</div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;