import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class BookInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: '',
            user: JSON.parse(localStorage.getItem('authToken'))
        }
    }

    componentDidMount() {
        this.getInfo();
    }

    getInfo() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:8080/book/' + id).then(response => {
            this.setState({ info: response.data }, () => {
                //console.log(response.data);
            })
        })
    }

    update(book) {
        axios.request({
            method: 'Put',
            url: 'http://localhost:8080/book/update',
            data: book
        }).then(res => {
            console.log(book);
            this.props.history.push('/book');
        }).catch(err => console.log(err));
    }

    onUpdateSubmit(e) {
        e.preventDefault();
        const book = {
            id: this.state.info.id,
            name: this.refs.Name.value,
            author: this.refs.Author.value,
            description: this.refs.Description.value
        }
        this.update(book);
    }

    onDelete(){
        let id = this.state.info.id;
        axios.delete('http://localhost:8080/book/' + id).then(res=>{
            this.props.history.push('/book');
        })
    }

    takeBook(){
        let bookInfo = this.state.info;
        bookInfo.taker = this.state.user.id;
        this.update(bookInfo);
    }

    render() {
        return (
            <div>
                <h1> Info </h1>
                <h2> {this.state.info.author} </h2>
                <h2> {this.state.info.description} </h2>
                {(this.state.user.admin === 1) ? ( 
                    <span>
                        {(this.state.info.taker != -1) ? (
                            <Link to={{pathname: "/user/" + this.state.info.taker, state:{user: this.state.info.taker, routed: ("/book/" + this.state.info.name)}}}>
                            <h2>{this.state.info.taker}</h2>
                        </Link>
                        ) : (<span />)}
                
                        <button className="btn" data-toggle="modal" data-target="#exampleModal"> update </button>
                        <button className="btn" onClick= {this.onDelete.bind(this)}> delete </button> 
                        {(this.state.info.taker === -1) ? (
                            <button className="btn" onClick= {this.takeBook.bind(this)}> take out </button> 
                        ): (
                            <span />
                        )}
                        
                    </span>
                )
                : (<span />)}
                
                {(this.props.location.state) ? (
                    <button className="btn"> <Link to= {this.props.location.state.routed} style={{color: 'black'}}> Back </Link>  </button>
                ) : (
                    <button className="btn"> <Link to= "/" style={{color: 'black'}}> Back </Link>  </button>
                )}

                <div className="modal fade" id="exampleModal" data-backdrop="" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.onUpdateSubmit.bind(this)} id="updateForm">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" name="name" placeholder={this.state.info.name} ref="Name" required />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Author</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" name="author" placeholder={this.state.info.author} ref="Author" required />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" name="description" placeholder={this.state.info.description} ref="Description" required />
                                        </div>
                                    </div>
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

export default BookInfo;