import React from 'react'
import ReactDOM from 'react-dom'

//!css
import './index.css'

//!booksArrayimport in this name should match exactly as they are in file import and arraydeclaration
//!beacause it's not a deafault export
import { booksArray } from './booksArray'

//!import Book
//!you can change the name cause it's default export in the file
import AmazomeBook from './Book'

//!importing testing js from above folder
import { greeting } from './testing/testing'

//stateless function component
//always return JSX

//?do this method
// function Greeting() {
//   return <h3>This is jash and this is my first component</h3>
// }

//?dont do this method
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   )
// }

//?use html fregments in a proper format
//?React.fragment it just a fragment that we use to formate html

// function Greeting() {
//   return (
//     <React.Fragment>
//       <div>
//         <h3>multiple tags</h3>
//         <a href='http://www.google.com'>gulugulu</a>
//       </div>
//     </React.Fragment>
//   )
// }

// //?Nested Components, React Tools
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h2>shah jash</h2>

// const Message = () => <h3>this is the message component from jash</h3>

// ReactDOM.render(<Greeting />, document.getElementById('root'))
//?var
//?array sample with map
// const names = ['john', 'peter', 'susan']
// const newName = names.map((name) => {
//   return <h1>{name}</h1>
//   console.log(name)
// })
// console.log(newName)

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {booksArray.map((book, index) => {
        const { img, title, author } = book
        return <AmazomeBook {...book} key={book.id} />

        //? -----OR------ without id you can use index of array

        // return <Book book={book} key={index} />
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
