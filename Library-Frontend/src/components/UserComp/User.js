import React, {Component} from 'react';
import UserItem from './UserItem';
import axios from 'axios';

class User extends Component{
        constructor(){
            super();
            this.state = {
                users: []
            }
        }

        componentDidMount(){
            this.getUsers();
        }

        getUsers(){
            axios.get('http://localhost:8080/allUser').then(response=>{
                this.setState({users : response.data},()=>{
                    //console.log(this.state);
                })
            })
        }

        render(){
            var userItem = this.state.users.map((user, i)=>{
                return(
                    <UserItem key = {user.id} item = {user}/>
                )
            })
            return(
                <div>
                    <h1> user js </h1>
                    <ul className="list-group">
                        {userItem}
                    </ul>
                </div>
            )
        }
}

export default User;