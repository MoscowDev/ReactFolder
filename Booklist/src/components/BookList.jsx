
import React, {useEffect, useState} from "react";
import styles from "./bookList.module.css";
import mockBookList from "./mockBookList";

const BookList = () => {
	const [books, setBooks] = useState([]);
	const [allBooks, setAllBooks] = useState([]);
	const [newBook, setNewBook]=useState("");
	const [searchTerm, setSearchTerm] = useState("");
	
	useEffect(() => {
		const fetchBookList  = async() => {
			try{
				const listOfbooks = await mockBookList();
				setBooks(listOfbooks.books);
				setAllBooks(listOfbooks.books);
			} catch (error) {
				console.log(error)	
			}
		}
		fetchBookList()
 	}, []);

	const handleDelete = (bookToDelete) => {
		setBooks(books.filter(book => book !== bookToDelete));
		setAllBooks(allBooks.filter(book => book !== bookToDelete));
	};

	const handleSearch = (query) => {
		if (!query.trim().toLowerCase()) {
			setBooks(allBooks);
			return; 
		}
		setBooks(allBooks.filter((book) => book.toLowerCase().includes(query.trim().toLowerCase())));
	};
	// const handleChange = (event)=>{
	// 	setNewBook(event.target.value.trim())
	// }

	// const handleAddBook = (event)=>{
	// 	event.prevetDefault();
	// 	if(newBook){
	// 		setBooks((prev)=>([...prev,newBook]))
	// 	}
	// }
	const handleAddBook = (event) =>{
		event.preventDefault();
		if(newBook && newBook.trim()){
			const trimmed = newBook.trim();
			setAllBooks([...allBooks, trimmed]);
			setBooks([...books, trimmed]);
			setNewBook("");
		}
	}


	const handleChange = (event) =>{
		setNewBook(event.target.value);
	}

	const handleSearchChange = (event) => {
		const q = event.target.value;
		setSearchTerm(q);
		handleSearch(q);
	};

    return (
       <div className={styles.wrapper}>
	    <header>
	    	<div className={styles["page-banner"]}>
	    		<h1 className={styles.title}> Book Collections</h1>
         					 <p className={styles["Nelson"]}>Books</p>
					<form className={styles["search-books"]} onSubmit={(e)=>e.preventDefault()}>
						<input
							type="text"
							placeholder="Search books..."
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</form>
	    	</div>
	    </header>
	    <div className={styles["book-list"]}>
	    	<h2 className={styles.title}>Books to Read</h2>
		
		
	    	<ul>
				{books.map((book, index) => (
				<li key = {index}>
					<span className={styles.name}>{book}</span>
					<span onClick={() => handleDelete(book)} className={styles.delete}>delete</span>
				</li>
				))}																																																																																																																																																																																																																																												

	    		{/* <li>
	    			<span className={styles.name}>The Wise Man's Fear</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>Kafka on the Shore</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Master and the Margarita</span>
	    			<span className={styles.delete}>delete</span>
	    		</li> 
	    	</ul> */}
			</ul>
	    </div>
	    <form onSubmit={handleAddBook} className={styles["add-book"]}>
	    	<input type="text" value={newBook} onChange={handleChange} placeholder="Add a book..." />
	    	<button >Add</button>
	    </form>

    </div>
    )
	} 	;
export default BookList;