import React,{Component}  from "react";
import BookService from "../services/BookService";
class Book{
    constructor() {
        this.id = ''
        this.title =''
        this.author = ''
        this.price = ''
        this.publisher = ''
    }
}
class GetData extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        BookService.getBooks().then((response) => {
            this.setState({books: response.data})
        })
    }

    render(){
        return (
            <form>
                <div>
                    <h1>Welcome to the Book App</h1>
                    <button> Add Book</button>
                    <button> Search Book</button>
                    <button> Update Book</button>
                    <button> Delete Book</button>


                    <table className ="table table-striped">
                        <thead>
                        <tr>
                            <td> Book ID</td>
                            <td> Title</td>
                            <td> Author</td>
                            <td> Price</td>
                            <td> Publisher</td>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.books.map(
                                book =>
                                    <tr key = {book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td> {book.author}</td>
                                        <td>{book.price}</td>
                                        <td>{book.publisher}</td>
                                    </tr>
                            )
                        }

                        </tbody>


                    </table>
                </div>
            </form>


        );
    }
}
export default GetData;