import { useState } from 'react';

const ContactManager = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState({});
    const [edit, setEdit] = useState(null);
    const bgColors = ["bw_contact_card_red", "bw_contact_card_blue", "bw_contact_card_green", "bw_contact_card_yellow"];  
    const backgroundColor = (index) => {
        return bgColors[index % bgColors.length];
    };
    const errorHandle = () => {
        const newError = {};
        // name error 
        if(!name.trim()){
            newError.name = "Name is required.";
        }
        else if(name.trim().length < 3){
            newError.name = "Name must be at least 3 characters."
        }
        // email
        if(!email.trim()){
            newError.email = "Email is required.";
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            newError.email = "Enter a valid email.";
        }
        // phone
        if(!phone.trim()){
            newError.phone = "Phone number is required";
        }
        else if(!/^[0-9]{10}$/.test(phone)){
            newError.phone = "Phone number must be 10 digits";
        }
        // address
        if(!address.trim()){
            newError.address = "Address is required."
        }
        else if(address.trim().length < 10){
            newError.address = "Address must be at least 10 characters."
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    };
    const submitForm = (e) => {
        e.preventDefault();
        if (!errorHandle()) { 
            return; 
        }
        const contactData = {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            address: address.trim()
        }
        if (edit !== null){
            setContacts(
                contacts.map((contact)=>contact.id === edit ? {...contact, ...contactData} : contact)
            );
            setEdit(null);
        }
        else {
            const newContact = {
                id: Date.now(),
                ...contactData
            };
            setContacts([...contacts, newContact]);
        }
        // clear form
        if(errorHandle()){
            console.log("Form Submitted.")
            setName("");
            setEmail("");
            setPhone("");
            setAddress("");
        }
    };
    const editContact = (contact) => {
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
        setAddress(contact.address);

        setEdit(contact.id);
    };
    const deleteContact = (id) => {
        setContacts(contacts.filter((contact)=>contact.id !== id));
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Contact Manager</h1>
            <div className="bw_container_full">
                <div className="bw_contact_manager">
                    <form action="" className="bw_contact_form" onSubmit={submitForm}>
                        <div className="bw_label_input">
                            <label htmlFor="name" className="bw_label">Name</label>
                            <input type="text" name="name" id="" className="bw_input" value={name} onChange={(e)=>setName(e.target.value)}/>
                            {error.name && (<p>{error.name}</p>)}
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="email" className="bw_label">Email</label>
                            <input type="email" name="email" id="" className="bw_input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            {error.email && (<p>{error.email}</p>)}
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="phone" className="bw_label">Phone</label>
                            <input type="tel" name="phone" id="phone" className="bw_input" maxLength={10} value={phone} onChange={(e)=>{const value = e.target.value.replace(/\D/g, ""); setPhone(value)}}/>
                            {error.phone && (<p>{error.phone}</p>)}
                        </div>
                        <div className="bw_label_input">
                            <label htmlFor="address" className="bw_label">Address</label> 
                            <textarea name="address" id="" rows={3} className="bw_input bw_textarea" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                             {error.address && (<p>{error.address}</p>)}
                        </div>
                        <div className="bw_btn_wrap_right">
                            <button type="submit" className="bw_btn bw_primary_btn">{edit ? "Update" : "Submit"}</button>
                        </div>
                    </form>
                    <div className="bw_contact_card_list"> 
                        {
                            contacts.map((contact, index)=>(
                            <div className={`bw_contact_card ${backgroundColor(index)}`} key={contact.id}>
                                <div className="bw_contact_details">
                                    <h3>{contact.name}</h3>
                                    <h4>{contact.email}</h4>
                                    <h4>{contact.phone}</h4>
                                    <p>{contact.address}</p>
                                </div>
                                <div className="bw_btn_wrap_right">
                                    <button type="button" className="bw_btn bw_primary_btn" onClick={()=>editContact(contact)}>Edit</button>
                                    <button type="button" className="bw_btn bw_danger_btn" onClick={()=>deleteContact(contact.id)}>Delete</button>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactManager;