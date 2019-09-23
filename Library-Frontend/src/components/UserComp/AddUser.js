import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class AddUser extends Component {
    constructor(){
        super();
        this.state = {
            error: ""
        }
    }

    addUser(user){
        axios.request({
            method: 'POST',
            url: 'http://localhost:8080/user/add',
            data: user
        }).then(res => {
            if(res.data === "success"){
                this.props.history.push('/')
            }else{
                this.setState({ error: res.data });
            }
        }).catch(err => console.log(err));
    }

    onAddSubmit(event) {
        const user = {
            firstName: this.refs.firstName.value,
            surname: this.refs.surname.value,
            email: this.refs.email.value,
            address: this.refs.address.value,
            password: this.refs.password.value,
            admin: this.refs.admin.value,
            phone: this.refs.phone.value
        }

        console.log(this.refs.admin.value);

        this.addUser(user);
        event.preventDefault();
    }

    render() {
        return (
            < div >
                <form onSubmit={this.onAddSubmit.bind(this)}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="firstName" placeholder="First Name" ref="firstName" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Surname</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="surname" placeholder="Surname" ref="surname" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="email" placeholder="Email" ref="email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="address" placeholder="Address" ref="address" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="password" placeholder="Password" ref="password" />
                        </div>
                    </div>

                    <input type="hidden" className="form-control" name="admin" placeholder="Admin" ref="admin" value="0" />


                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" name="phone" placeholder="Phone" ref="phone" />
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
            </div >
        )
    }
}

export default withRouter(AddUser);