import React,{Component} from 'react';
import BookItem from './BookItem';
import axios from 'axios';

class Book extends Component{
    constructor(){
        super();
        this.state = {
            books: [],
            user: JSON.parse(localStorage.getItem('authToken')),
            show: false
        }
    }

    componentDidMount(){
        this.getBooks();
    }

    getBooks(){
        axios.get('http://localhost:8080/allBook').then(response=>{
            this.setState({books : response.data},()=>{
                //console.log(this.state);
            })
        })
    }

    showTaken(){
        console.log("taken");
        console.log(this.state.user);
        if(this.state.show === false){
            this.setState({show: true});
        }
    }

    showNotTaken(){
        if(this.state.show === true){
            this.setState({show: false});
        }
    }

    render(){
        var bookItem = this.state.books.map((book, i)=>{
            return(
                <div key={i}>
                    {(this.state.show === false) ? (
                        <div>
                            {(book.taker === -1) ? (
                                <BookItem key = {book.id} item = {book}/>
                            ) : (
                                <span />
                            )}
                        </div>
                    ) : (
                        <div>
                            {(book.taker >= 0) ? (
                                <BookItem key = {book.id} item = {book}/>
                            ) : (
                                <span />
                            )}
                        </div>
                    )}
                    
                </div>
            )
        })
        return(
            <div>
                <h1>book js</h1>
                {(this.state.user && this.state.user.admin === 1) ? (
                    <div>
                        {(this.state.show === false) ? (
                            <button onClick= {(this.showTaken.bind(this))} > Show taken out books </button>
                        ) : (
                            <button onClick= {(this.showNotTaken.bind(this))} > Show books not taken out </button>
                        )}
                    </div>
                ) : (
                    <span />
                )}
                <ul className="list-group">
                        {bookItem}
                </ul>
            </div>
        )
    }
}

export default Book;