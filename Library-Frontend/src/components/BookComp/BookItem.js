import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class BookItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item : props.item,
            user : JSON.parse(localStorage.getItem('authToken'))
        }
    }

    onDelete(){
        let id = this.state.item.id;
        axios.delete('http://localhost:8080/book/' + id).then(res=>{
            window.location.reload();
        })
    }

    render(){
        return(
            <li className="list-group-item">
                <Link to= {'/book/' + this.state.item.name}>
                    {this.state.item.name}
                </Link>
                {(this.state.user && this.state.user.admin === 1) ? ( 
                <span className="badge-right float-right">
                    <button className="btn btn-primary fa fa-close" onClick={this.onDelete.bind(this)} />
                </span> ) : (<span />)}
            </li>
        )
    }
}

export default BookItem;