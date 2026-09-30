import { useState } from 'react';

const BookManager = () => {
    const [total, setTotal] = useState(0); 
    const [book, setBook] = useState([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState({});
    const [edit, setEdit] = useState(null);

    const errorHandle = () => {
        const newError = {};
        if(!title.trim()){
            newError.title = "Title is required.";
        }
        else if(title.trim().length < 3){
            newError.title = "Title must be at least 3 characters.";
        }
        if(!author.trim()){
            newError.author = "Author is required.";
        }
        else if(author.trim().length < 3){
            newError.author = "Author must be at least 3 characters.";
        }
        if(!category.trim()){
            newError.category = "Category is required.";
        }
        if(!price.trim()){
            newError.price = "Price is required.";
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorHandle())
            return;
        const createBook = {
            title: title.trim(),
            author: author.trim(),
            category: category.trim(),
            price: price.trim(),
        }
        if(edit !== null){
            const oldBook = book.find(
                (book) => book.id === edit
            );
            const difference = Number(price) - Number(oldBook.price);
            setTotal(total + difference);
            setBook(
                book.map((book)=>book.id === edit ? {...book, ...createBook} : book)
            );
            setEdit(null);
        }
        else {
            const newBook = {
                id: Date.now(),
                ...createBook
            }
            setBook([...book, newBook]);
            setTotal(total + Number(price));
        }
        // clear form
        if(errorHandle()){
            console.log("Form is submitted.");
            setTitle("");
            setAuthor("");
            setCategory("");
            setPrice("");
        }
    };
    const editBook = (book) => {
        setTitle(book.title);
        setAuthor(book.author);
        setCategory(book.category);
        setPrice(book.price);
        setEdit(book.id);
    };
    const deleteBook = (id) => {
        const difference = Number(book.find((book) => book.id === id).price);
        setTotal(total - difference);
        setBook(book.filter((book) => book.id !== id));
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Book Manager</h1>
            <div className="bw_container_full">
                <div className="bw_book_manager">
                    <div className="bw_book_manager_head">
                        <h3>Total Price:</h3>
                        <h3>₹{total}</h3>
                    </div>
                    <form action="" className="bw_book_manager_form" onSubmit={handleSubmit}>
                        <div className="bw_label_input_main">
                            <div className="bw_label_input">
                                <label htmlFor="title" className="bw_label">Title</label>
                                <input type="text" name="title" id="title" className="bw_input" value={title} onChange={(e) => setTitle(e.target.value)}/>
                                {error.title && <p>{error.title}</p>}
                            </div>
                            <div className="bw_label_input">
                                <label htmlFor="author" className="bw_label">Author</label>
                                <input type="text" name="author" id="author" className="bw_input" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                                {error.author && <p>{error.author}</p>}
                            </div>
                        </div>
                        <div className="bw_label_input_main">
                            <div className="bw_label_input">
                                <label htmlFor="category" className="bw_label">Category</label>
                                <select className="bw_input bw_select" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    <option value="fiction">Fiction</option> 
                                    <option value="science">Science</option>
                                    <option value="technology">Technology</option> 
                                    <option value="biography">Biography</option>
                                    <option value="history">History</option> 
                                    <option value="business">Business</option>
                                    <option value="finance">Finance</option>
                                    <option value="psychology">Psychology</option> 
                                    <option value="mystery">Mystery</option>
                                    <option value="thriller">Thriller</option> 
                                    <option value="education">Education</option>
                                    <option value="comics">Comics</option>
                                    <option value="travel">Travel</option>
                                    <option value="health">Health</option>
                                    <option value="philosophy">Philosophy</option>
                                </select>
                                {error.category && <p>{error.category}</p>}
                            </div>
                            <div className="bw_label_input">
                                <label htmlFor="price" className="bw_label">Price</label>
                                <input type="text" name="price" id="price" className="bw_input" value={price} onChange={(e) => setPrice(e.target.value)}/>
                                {error.price && <p>{error.price}</p>}
                            </div>
                        </div>
                        <div className="bw_btn_wrap_right">
                            <button type="submit" className="bw_btn bw_primary_btn">{edit ? "Update" : "Add"}</button>
                        </div> 
                    </form>
                    <div className="bw_book_list_wrap">
                       {
                            book.map((book, index)=>(
                                <div className="bw_book_list" key={book.id}>
                                    <div className="bw_book_item">
                                        {index+1}
                                    </div>
                                    <div className="bw_book_title">
                                        <h4>{book.title}</h4>
                                    </div>
                                    <div className="bw_book_author">
                                        <h4>{book.author}</h4>
                                    </div>
                                    <div className="bw_book_category">
                                        <h4>{book.category}</h4>
                                    </div>
                                    <div className="bw_book_price">
                                        <h4>{book.price}</h4>
                                    </div>
                                    <div className="bw_btn_wrap">
                                        <button type="button" className="bw_btn bw_primary_btn" onClick={()=>editBook(book)}>Edit</button>
                                        <button type="button" className="bw_btn bw_danger_btn" onClick={()=>deleteBook(book.id)}>Delete</button>
                                    </div>
                                </div>
                            ))
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookManager;