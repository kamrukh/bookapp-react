import React,{Component}  from "react";
import BookService from "../services/BookService";

class DeleteBook extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    idOnChangeEvent = event =>{
        this.setState({
            id: event.target.value
        })
    }
    deleteBook = e => {
        e.preventDefault();
        BookService.deleteBook(this.state.id).then();
    }

    render(){
        return (
            <form>
                <div>
                    <label>
                        Enter Book ID:
                        <input  type = "text"
                                value={this.state.id}
                                onChange={this.idOnChangeEvent}
                        />
                    </label>
                    <input type="submit" value="Delete"
                    onClick={this.deleteBook}/>
                </div>
            </form>
        );
    }
}
export default DeleteBook;