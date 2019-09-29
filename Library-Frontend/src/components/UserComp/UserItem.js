import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class UserItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }

    onDelete(){
        let id = this.state.item.id;
        axios.delete('http://localhost:8080/user/' + id).then(res=>{
            window.location.reload();
        })
    }
    
    render(){
        return(
            <li className="list-group-item">
                <Link to= {{pathname: "/user/" + this.state.item.firstName, state:{user : this.state.item, routed: "/user"}}}>
                    {this.state.item.firstName}
                </Link>
                <span className="badge left float-right">
                    <button className="btn btn-primary fa fa-minus" onClick={this.onDelete.bind(this)} />
                </span>
            </li>
        )
    }
}

export default UserItem;