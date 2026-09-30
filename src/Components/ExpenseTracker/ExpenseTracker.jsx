import { useState } from 'react';

const ExpenseTracker = () => {
    const [totalExpense, setTotalExpense] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState({});
    const [edit, setEdit] = useState(null);

    const errorHandle = () => {
        const newError = {};
        // title
        if(!title.trim()){
            newError.title = "Title is required."
        }
        else if(title.trim().length < 3){
            newError.title = "Title must be at least 3 characters."
        }
        // amount
        if(!amount.trim()){
            newError.amount = "Amount is required."
        }
        else if(Number(amount) <= 0){
            newError.amount = "Amount must be greater than 0."
        }
        // category
        if(!category){
            newError.category = "Category is required."
        }
        // date
        if (!date) {
            newError.date = "Date is required";
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorHandle()){
            return;
        }
        const createExpense = { 
            title: title.trim(),
            amount: amount.trim(),
            category: category.trim(),
            date: date.trim(),
        }
        if(edit !== null){
            const oldExpense = expenses.find(
                (expense) => expense.id === edit
            );
            const difference = Number(amount) - Number(oldExpense.amount);
            setTotalExpense(totalExpense + difference);
            setExpenses(
                expenses.map((expense)=>expense.id === edit ? {...expense, ...createExpense} : expense)
            );
            setEdit(null);
        }
        else {
            const newExpense = {
                id: Date.now(),
                ...createExpense
            }
            setExpenses([...expenses, newExpense]);
            setTotalExpense(totalExpense + Number(amount));
        }
        // clear form
        if(errorHandle()){
            console.log("Form is submitted.");
            setTitle("");
            setAmount("");
            setCategory("");
            setDate("");
        }
    };
    const editExpense = (expense) => {
        setTitle(expense.title);
        setAmount(expense.amount);
        setCategory(expense.category);
        setDate(expense.date);
        setEdit(expense.id);
    };
    const deleteExpense = (id) => {
        const expense = expenses.find((expense)=>expense.id === id);
        setExpenses(expenses.filter((expense)=>expense.id !== id));
        setTotalExpense(totalExpense - Number(expense.amount));
    }
    return (
        <div className="bw_wrap_sec">
            <h1>Expense Tracker</h1>
            <div className="bw_container_full">
                <div className="bw_expense_tracker">
                    <div className="bw_expense_tracker_head">
                        <h3>Total Expense:</h3>
                        <h3>₹{totalExpense}</h3>
                    </div>
                    <form action="" className="bw_expense_form" onSubmit={handleSubmit}> 
                        <div className="bw_label_input_main">
                            <div className="bw_label_input">
                                <label htmlFor="title" className="bw_label">Title</label>
                                <input type="text" name="title" id="title" className="bw_input" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                {error.title && <p>{error.title}</p>}
                            </div>
                            <div className="bw_label_input">
                                <label htmlFor="amount" className="bw_label">Amount</label>
                                <input type="text" name="amount" id="amount" className="bw_input" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                                {error.amount && <p>{error.amount}</p>}
                            </div>
                        </div>
                        <div className="bw_label_input_main">
                            <div className="bw_label_input">
                                <label htmlFor="category" className="bw_label">Category</label>
                                <select className="bw_input bw_select" name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                                    <option value="rent">Rent</option>
                                    <option value="food">Food</option>
                                    <option value="water-electricity">Water/Electricity</option>
                                    <option value="travel">Travel</option>
                                    <option value="shopping">Shopping</option>
                                </select>
                                {error.category && <p>{error.category}</p>}
                            </div>
                            <div className="bw_label_input">
                                <label htmlFor="date" className="bw_label">Date</label>
                                <input type="date" name="date" id="date" className="bw_input" value={date} onChange={(e)=>setDate(e.target.value)}/>
                                {error.date && <p>{error.date}</p>}
                            </div>
                        </div>
                        <div className="bw_btn_wrap_right">
                            <button type="submit" className="bw_btn bw_primary_btn">{edit ? "Update" : "Add"}</button>
                        </div> 
                    </form>
                    <div className="bw_expense_list_wrap">
                        {
                            expenses.map((expense, index)=>(
                                <div className="bw_expense_list" key={expense.id}>
                                    <div className="bw_expense_item">
                                        {index + 1}
                                    </div>
                                    <div className="bw_expense_title">
                                        <h4>{expense.title}</h4>
                                    </div>
                                    <div className="bw_expense_amount">
                                        <h4>{expense.amount}</h4>
                                    </div>
                                    <div className="bw_expense_category">
                                        <h4>{expense.category}</h4>
                                    </div>
                                    <div className="bw_expense_date">
                                        <h4>{expense.date}</h4>
                                    </div>
                                    <div className="bw_btn_wrap">
                                        <button type="button" className="bw_btn bw_primary_btn" onClick={()=>editExpense(expense)}>Edit</button>
                                        <button type="button" className="bw_btn bw_danger_btn" onClick={()=>deleteExpense(expense.id)}>Delete</button>
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

export default ExpenseTracker