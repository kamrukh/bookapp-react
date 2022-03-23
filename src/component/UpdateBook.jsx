import React,{Component}  from "react";
import BookService from "../services/BookService";

class UpdateBook extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            author: '',
            price: '',
            publisher: ''

        }
    }
    titleOnChangeEvent = event => {
        this.setState({
            title: event.target.value
        })
    }
    authorOnChangeEvent = event => {
        this.setState({
            author: event.target.value
        })
    }
    priceOnChangeEvent = event => {
        this.setState({
            price: event.target.value
        })
    }
    publisherOnChangeEvent = event => {
        this.setState({
            publisher: event.target.value
        })
    }
    idOnChangeEvent = event =>{
        this.setState({
            id: event.target.value
        })
    }
    getBookInfo = event => {
        event.preventDefault()
        BookService.getBookByID(this.state.id).then((res) =>{
            this.setState({
                title: res.data.title,
                author: res.data.author,
                price: res.data.price,
                publisher: res.data.publisher
            })
        })

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
                    <input type = "submit" value ="Search"
                    onClick={this.getBookInfo}/>
                    <br/>

                    <label>
                        Title:
                        <input type="text"

                               value={this.state.title}
                               onChange={this.titleOnChangeEvent}
                        />
                    </label>

                    <label>
                        Author:
                        <input type="text"
                               value={this.state.author}
                               onChange={this.authorOnChangeEvent}
                        />
                    </label>
                    <label>
                        Price:
                        <input type="text"

                               value={this.state.price}
                               onChange={this.priceOnChangeEvent}
                        />
                    </label>
                    <label>
                        Publisher:
                        <input type="text"

                               value={this.state.publisher}
                               onChange={this.publisherOnChangeEvent}
                        />
                    </label>

                    <input type="submit" value="Update"
                    />

                </div>
            </form>
        );
    }
}
export default UpdateBook;