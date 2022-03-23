import axios from "axios";

const URL = "http://springbootbookapp-env.eba-ixmpuhj7.us-east-1.elasticbeanstalk.com/"
class BookService {
    getBooks() {
        let BOOK_URL = URL + 'books'
        return axios.get(BOOK_URL);
    }
    getBookByID(book_id) {
        let BOOK_URL = URL + 'book/id/' + book_id
        return axios.get(BOOK_URL);
    }

    getBookByAuthor(author) {
        let BOOK_URL = URL + 'book/author/' + author
        return axios.get(BOOK_URL);
    }

    getBookByTitle(title) {
        let BOOK_URL = URL + 'book/title/' + title
        return axios.get(BOOK_URL);
    }

    addBook(book) {
        let BOOK_URL = URL + 'save'
        return axios.post(BOOK_URL, book)
    }
    deleteBook(book_id){
        const BOOKS_URL = URL + 'delete/'+book_id;
        return axios.delete(BOOKS_URL);
    }
    updateBook(book_id,book){
        let BOOK_URL = URL + 'update/' + book_id
        return axios.put(BOOK_URL,)
    }
}
export default new BookService()