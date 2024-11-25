import React from 'react';
import style from "../styles/bookListPage.module.css"
import { useState } from "react";

const BookList = () =>{

    const books =  ["Name of the Wind", "The Wise Man's Fear","Kafka on the Shore"," The Master and the Margarit"]

    const [bookList, setBookList] = useState (books);

    const addBook = (event)=>{
        console.log(event)
        event.preventDefault();
        const newBook = event.target[0].value;
        // ([...bookList ,newBook])
        setBookList((prevBooks)=>(
            [...prevBooks ,newBook]

        ))
       
        console.log(newBook);
        event.target[0].value="";
    }

    const handleDelete = (index)=>{
        // bookList.filter((_,index)=>())
         setBookList(bookList.filter((_,i)=>(i != index))) 
    }


    return(
        <div id={style.wrapper}>
	    <header>
	    	<div id={style.pageBanner}>
	    		<h1 className={style.title}> Book Collections</h1>
                <p>Books</p>
                <form  id={style.searchBooks}>
                    <input type="text" placeholder="Search books..." />
                </form>
	    	</div>
	    </header>
	    <div id={style.bookList}>
	    	<h2 className={style.title}>Books to Read</h2>
	    	<ul>
                {
                  bookList.map((book,index)=>(
                    <li key={index}>
                        <span className={style.name}>{book}</span>
                        <span onClick={()=>handleDelete(index)} className ={style.delete}>delete</span>
	    		    </li>
                  ))  
                }
	    		{/* <li>
	    			<span className={style.name}>Name of the Wind</span>
	    			<span className={style.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={style.name}> The Wise Man's Fear</span>
	    			<span className={style.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={style.name}> Kafka on the Shore</span>
	    			<span className={style.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={style.name}> The Master and the Margarita</span>
	    			<span className={style.delete}>delete</span>
	    		</li> */}
	    	</ul>
	    </div>
	    <form  onSubmit ={addBook} id={style.addBook}>
	    	<input type="text" placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>

    </div>

    )
   
}
export default BookList;


