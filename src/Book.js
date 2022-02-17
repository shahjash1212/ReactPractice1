import React from 'react'

//?method 4 using event listener onClick onMouseOver

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book

  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
  }
  // const clickHandler = () => {
  //   alert('hello world')
  // }

  const complexHandler = () => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' onClick={() => console.log(title)} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Example 1
      </button>
      {/* //!this will return all the author name wihout click */}
      {/* <button type='button' onClick={complexHandler(author)}> */}
      {/* //!this will return the author name of that book only when click */}
      <button type='button' onClick={() => complexHandler(author)}>
        Example 2
      </button>
    </article>
  )
}

//?method3

// const Book = ({ img, title, author }) => {
//   // const { img, title, author } = props.book
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   )
// }

//?method 1
// const Book = (props) => {
//   const cal = 'is good'
//   return (
//     <article className='book'>
//       <img src={props.img} alt='' />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//       <h3>{props.number}</h3>
//     </article>
//   )
// }

//?method2
// const Book = (props) => {
//   const cal = 'is good'
//   const { img, title, author, number } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       <h3>{number}</h3>
//     </article>
//   )
// }

// const Title = () => <h1>The Jungle Book (AmazonClassics Edition)</h1>
// const Auther = () => (
//   < style={{ color: '#617d98', fontSize: '.7rem', marginTop: '.2rem' }}>
//     Rudyard Kipling {6 + 6}
export default Book
