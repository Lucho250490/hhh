import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, newQuote, color, imag}) => {
  return (
    <div className='quoteBox' style={{background:imag}} >

      
      
      <article className="capa">

      <figure>
        <img src={imag.imag}/>
      </figure>

      

      <p  style={{color:color}} >{quote.quote}</p>

      <i className='bx bxs-quote-left quoteBox_icon'  style={{color:color}} ></i>

      <h3 className='quoteBox_author' style={{color:color}}>{quote.author} </h3>


      </article>
      <h1 className="title" style={{color:color}}>Overcoming phrases
      </h1>

      
      

      <QuoteButton newQuote = {newQuote} 
      color = {color}/>

      
      
       
    </div>
  )
}

export default QuoteBox