import { useState } from 'react';

const UserCrud = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [users, setUsers] = useState([]);
    const [editId, setEditId] = useState(null);
    const addUser = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !address) {
            alert("Please fill all the required fields.");
            return;
        }
        // update
        if (editId !== null) {
            const updateUsers = users.map((user)=>
                user.id === editId ? { ...user, name, email, phone, address } : user
            );
            setUsers(updateUsers);
            setEditId(null);
        }
        // add
        else {
            const newUser = {
                id: Date.now(),
                name,
                email,
                phone,
                address
            };
            setUsers([...users, newUser]);
        }
        // clear form
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
    };
    // delete
    const deleteUser = (id) => {
        const filteredUser = users.filter((user)=> user.id !== id);
        setUsers(filteredUser);
    };
    // edit 
    const editUser = (user) => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setAddress(user.address);
        setEditId(user.id);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>User Crud</h1>
            <div className="bw_container">
                <div className="bw_user_crud">
                    <form action="" className="bw_user_form" onSubmit={addUser}>
                        <div className="bw_label_input">
                            <label htmlFor="name" className="bw_label">Name</label>
                            <input type="text" id="name" className="bw_input" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="email" className="bw_label">Email</label>
                            <input type="text" id="email" className="bw_input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="phone" className="bw_label">Phone</label>
                            <input type="number" id="phone" className="bw_input" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="address" className="bw_label">Address</label> 
                            <textarea name="" id="address" cols="30" rows="4" className="bw_input bw_textarea" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                        </div>
                        <div className="bw_btn_wrap">
                            <button type="submit" className="bw_btn bw_primary_btn">{editId !== null ? "Update User" : "Add User"}</button>
                        </div>
                    </form>
                    <div className="bw_user_crud_list">
                        {
                            users.length === 0 ? ( <p>No users added yet.</p> ) : (
                                users.map((user)=>(
                                    <div className="bw_user_crud_card" key={user.id}>
                                        <h3>{user.name}</h3>
                                        <h4>{user.email}</h4>
                                        <h4>{user.phone}</h4>
                                        <p>{user.address}</p>
                                        <div className="bw_user_btn_wrap">
                                            <button type="button" className="bw_btn bw_primary_btn" onClick={()=>editUser(user)}>Edit</button>
                                            <button type="button" className="bw_btn bw_danger_btn" onClick={()=>deleteUser(user.id)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCrud;