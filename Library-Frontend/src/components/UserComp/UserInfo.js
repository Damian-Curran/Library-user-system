import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            info: {firstName: '', surname: '', email: '', address: '', phone: '', admin: ''},
            user: JSON.parse(localStorage.getItem('authToken')),
            userBooks: []
        }
    }

    componentDidMount(){
        this.getUserInfo();
    }

    getUserInfo(){
        var id;
        if(this.props.location.state != null){
            if(this.props.location.state.user.id != null){
                id = this.props.location.state.user.id;
            }else{
                id = this.props.location.state.user;
            }
            
        }else{
            id = this.state.user.id;
        }

        axios.get('http://localhost:8080/user/' + id).then(response => {
            this.setState({ info: response.data }, () => {
                //console.log(this.props);
            })
        })

        axios.get('http://localhost:8080/book/userBooks/' + id).then(response => {
            this.setState({ userBooks: response.data }, () => {
                //console.log(response.data);
            })
        })
    }

    update(user) {
        axios.request({
            method: 'Put',
            url: 'http://localhost:8080/user/update',
            data: user
        }).then(res => {
            this.props.history.push('/user');
        }).catch(err => console.log(err));
    }

    onUpdateSubmit(event) {
        event.preventDefault();
        const user = {
            id: this.state.info.id,
            firstName: this.refs.firstName.value,
            surname: this.refs.surname.value,
            email: this.refs.email.value,
            address: this.refs.address.value,
            phone: this.refs.phone.value,
            admin: this.refs.admin.value
        }
        this.update(user);
    }

    render(){
        const listItems = this.state.userBooks.map((book) =>
        <Link to={{pathname: "/book/" + book.name, state:{user: this.state.info.taker, routed: ("/user/" + this.state.info.id)}}}>
            <li key={book.id}>{book.name}</li> 
        </Link>
        );

        return(
            <div className="">
            <h1> Info </h1>
            <h2> {this.state.info.firstName} </h2>
            <h2> {this.state.info.surname} </h2>
            <h2> {this.state.info.email} </h2>
            <h2> {this.state.info.address} </h2>
            <h2> {this.state.info.phone} </h2>

            {listItems}

            {(this.state.user.admin === 1) ? (
                <button className="btn" data-toggle="modal" data-target="#exampleModal"> update </button>
            ) : (
                <span />
            )}
            
            {(this.props.location.state) ? (
                <button className="btn"> <Link to= {this.props.location.state.routed} style={{color: 'black'}}> Back </Link>  </button>
            ) : (
                <button className="btn"> <Link to= "/" style={{color: 'black'}}> Back </Link>  </button>
            )}
            

            <div className="modal fade" id="exampleModal" data-backdrop="" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">User info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={this.onUpdateSubmit.bind(this)} id="updateForm">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="firstName" placeholder="First Name" ref="firstName" defaultValue={this.state.info.firstName} />
                            </div>
                        </div>
    
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Surname</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="surname" placeholder="Surname" ref="surname" defaultValue={this.state.info.surname}/>
                            </div>
                        </div>
    
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="email" placeholder="Email" ref="email" defaultValue={this.state.info.email}/>
                            </div>
                        </div>
    
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Address</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="address" placeholder="Address" ref="address" defaultValue={this.state.info.address}/>
                            </div>
                        </div>
    
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" name="phone" placeholder="Phone" ref="phone" defaultValue={this.state.info.phone}/>
                            </div>
                        </div>
                        {(this.state.user.admin === 1) ? (
                            <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Admin</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" name="admin" placeholder="0 or 1" ref="admin" defaultValue={this.state.info.admin}/>
                            </div>
                        </div>
                        ) : (
                            <span />
                        )}
                        
                    </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" form="updateForm" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default UserInfo;