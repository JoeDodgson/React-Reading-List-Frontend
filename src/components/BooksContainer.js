import React from 'react'
import { Book } from './Book';

export const BooksContainer = props => {
    // const books = [
    //     {
    //         authors: ["Suzanne Collins"],
    //         description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    //         image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //         link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    //         title: "The Hunger Games",
    //     },
    //     {
    //         authors: ["Collin Suzanne"],
    //         description: "Set in a park, someone goes for a walk.",
    //         image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //         link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    //         title: "The Hunger Shames",
    //     },
    //     {
    //         authors: ["Cuzanne Sollins"],
    //         description: "Nothing happens!",
    //         image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    //         link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    //         title: "The Hunger Flames",
    //     },
    // ];

    return (
        <div className="row books-container">
            <h3>{props.heading}</h3>
            {props.books.map(book => (
                <Book id={book.id} authors={book.authors} description={book.description} image={book.image} link={book.link} title={book.title}/>
            ))}
        </div>
    )
}
