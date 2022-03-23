import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import GetData from "./component/GetData";
import AddBook from "./component/AddBook";
import DeleteBook from "./component/DeleteBook";
import SearchBook from "./component/SearchBook";
import UpdateBook from "./component/UpdateBook";

ReactDOM.render(
      <div>
          <React.StrictMode>
              <GetData />
          </React.StrictMode>

          <React.StrictMode>
              <AddBook />
          </React.StrictMode>

          <React.StrictMode>
              <DeleteBook />
          </React.StrictMode>

          <React.StrictMode>
              <SearchBook />
          </React.StrictMode>

          <React.StrictMode>
              <UpdateBook />
          </React.StrictMode>
      </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
