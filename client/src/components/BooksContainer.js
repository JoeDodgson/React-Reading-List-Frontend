import React from 'react'
import { Book } from './Book';

export const BooksContainer = props => {
    return (
        <div className="row books-container">
            <h3>{props.heading}</h3>
            {props.books.map(book => (
                <Book 
                    key={book.id} 
                    id={book.id} 
                    title={book.title}
                    authors={book.authors} 
                    description={book.description} 
                    image={book.image} 
                    infoLink={book.infoLink}
                    addBook={props.addBook}
                    removeBook={props.removeBook}
                    heading={props.heading}
                />
            ))}
        </div>
    )
}
