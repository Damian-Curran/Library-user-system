import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

class AddBook extends Component {

    addBook(book) {
        axios.request({
            method: 'POST',
            url: 'http://localhost:8080/book/add',
            data: book
        }).then(res => {
            this.props.history.push('/book');
        }).catch(err => console.log(err));
    }

    onAddSubmit(event) {
        const book = {
            name: this.refs.Name.value,
            author: this.refs.Author.value,
            description: this.refs.Description.value
        }
        this.addBook(book);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onAddSubmit.bind(this)}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="name" placeholder="Name" ref="Name" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Author</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="author" placeholder="Author" ref="Author" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="description" placeholder="Description" ref="Description" />
                        </div>
                    </div>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default withRouter(AddBook);