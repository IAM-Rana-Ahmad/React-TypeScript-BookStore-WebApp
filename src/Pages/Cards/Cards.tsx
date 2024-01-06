import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookType } from '../../Types/Types'; 
import { GetBooks } from '../../Features/BookSlice';

const Cards: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetBooks());
  },[dispatch]);
  const books = useSelector((state:any)=>state.app.data); 

  

  return (
    <div className="container">
      <div className="row">
        {books.map((book:BookType) => (
          <div className="col-xxl-3" key={book.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={book.coverUrl} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
