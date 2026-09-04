import React, { useState } from 'react';

const RandomUserCard = () => {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const generateUser = () => {
        const names = [
        "James Anderson",
        "Emma Williams",
        "Michael Johnson",
        "Olivia Brown",
        "William Davis",
        "Sophia Miller",
        "Daniel Wilson",
        "Ava Moore",
        "Matthew Taylor",
        "Isabella Thomas"
        ];

        const dob = [
        "14-03-1995",
        "22-07-1998",
        "05-11-1993",
        "18-02-1996",
        "30-09-1994",
        "12-11-1997",
        "27-06-1994",
        "04-09-1997",
        "16-01-1995",
        "10-04-1998"
        ];

        const emails = [
        "james.anderson@gmail.com",
        "emma.williams@gmail.com",
        "michael.johnson@gmail.com",
        "olivia.brown@gmail.com",
        "william.davis@gmail.com",
        "sophia.miller@gmail.com",
        "daniel.wilson@gmail.com",
        "ava.moore@gmail.com",
        "matthew.taylor@gmail.com",
        "isabella.thomas@gmail.com"
        ];

        const phones = [
        "+1 202-555-0101",
        "+1 212-555-0102",
        "+1 305-555-0103",
        "+1 312-555-0104",
        "+1 415-555-0105",
        "+1 617-555-0106",
        "+1 702-555-0107",
        "+1 713-555-0108",
        "+1 206-555-0109",
        "+1 404-555-0110"
        ];

        const addresses = [
        "123 Main Street, New York, NY 10001",
        "456 Oak Avenue, Los Angeles, CA 90001",
        "789 Pine Street, Chicago, IL 60601",
        "321 Maple Road, Houston, TX 77001",
        "654 Cedar Lane, Phoenix, AZ 85001",
        "987 Washington Street, Boston, MA 02108",
        "246 Sunset Boulevard, Las Vegas, NV 89101",
        "135 Market Street, San Francisco, CA 94105",
        "864 Lakeview Drive, Seattle, WA 98101",
        "579 Peachtree Street, Atlanta, GA 30303"
        ];
         
        const userIndex = (arr) => {
            const index = Math.floor(Math.random() * arr.length);
            return index;
        };

        setName(names[userIndex(names)]);
        setDob(dob[userIndex(dob)]);
        setEmail(emails[userIndex(emails)]);
        setPhone(phones[userIndex(phones)]);
        setAddress(addresses[userIndex(addresses)]);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Random User Card</h1>
            <div className="bw_container">
                <div className="bw_random_user_card_grid">
                    <div className="bw_random_user_card"> 
                        <h3>Name: {name}</h3>
                        <h4>Dob: {dob}</h4>
                        <div className="bw_random_email_phone">
                            <h5>Email: {email}</h5>
                            <h5>Phone: {phone}</h5>
                        </div>
                        <p>Address: {address}</p>
                    </div>
                </div>
                <div className="bw_btn_wrap">
                    <button type="button" className="bw_btn bw_primary_btn" onClick={generateUser}>Generate User</button>
                </div>
            </div>
        </div>
    )
}

export default RandomUserCard;