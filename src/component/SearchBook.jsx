import React,{Component}  from "react";
import BookService from "../services/BookService";

class SearchBook extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchBy: 'id',
            id: '',
            author:'',
            price:'',
            publisher: '',
            title: ''
        }
        this.books =[]
    }

    searchValueOnChangeEvent = event =>{
        this.setState({
            searchValue: event.target.value
        })
    }
    searchByOnChangeEvent = event =>{
        this.setState({
            searchBy: event.target.value
        })
    }
    searchBook = event => {
        event.preventDefault()

        if (new String(this.state.searchBy).valueOf() == new String("id").valueOf()){
            console.log(this.state.searchValue)
            BookService.getBookByID(this.state.searchValue).then((res) => {
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    author:res.data.author,
                    price: res.data.price,
                    publisher: res.data.publisher
                })
            })
            console.log(this.state.title)
        }
        else if (new String(this.state.searchBy).valueOf() == new String("author").valueOf()){
            BookService.getBookByAuthor(this.state.searchValue).then((res) => {
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    author:res.data.author,
                    price: res.data.price,
                    publisher: res.data.publisher
                })
            })
            console.log(this.state.searchValue)
        }
        else{
            BookService.getBookByTitle(this.state.searchValue).then((res) => {
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    author:res.data.author,
                    price: res.data.price,
                    publisher: res.data.publisher
                })
            })

        }
    }
    render(){
        return (

            <form>
                <div>
                    <label>
                        Search By:
                        <select
                            value={this.state.searchBy}
                            onChange={this.searchByOnChangeEvent}>
                            <option value ="id"> ID </option>
                            <option value ="title"> Title </option>
                            <option value ="author"> Author </option>
                        </select>
                    </label>
                    <input type = "text"
                           value = {this.state.searchValue}
                           onChange={this.searchValueOnChangeEvent} />

                    <input type="submit" value="Search"
                    onClick={this.searchBook}/>
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


                                    <tr>
                                        <td>{this.state.id}</td>
                                        <td>{this.state.title}</td>
                                        <td> {this.state.author}</td>
                                        <td>{this.state.price}</td>
                                        <td>{this.state.publisher}</td>
                                    </tr>


                        </tbody>


                    </table>
                </div>
            </form>

        );
    }
}
export default SearchBook;