import React, { useEffect, useState } from 'react';

const UserSearch = () => {
    const [user, setUser] = useState([]);
    const [val, setVal] = useState("");
    const [userFilter, setUserFilter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then((res)=>res.json())
        .then((data)=>{setUser(data.users); 
        setUserFilter(data.users);})
        .catch((err)=>setError(err.message))
        .finally(()=>setLoading(false));
    }, []);
    const handleChange = (e) => {
        setVal(e.target.value);
    };
    const userSearch = () => {
        const filteredUser = user.filter((item)=>
            item.firstName.toLowerCase().includes(val.toLowerCase())
        )
        setUserFilter(filteredUser);
    }
    return (
        <div className="bw_wrap_sec">
            <h1>User Search</h1>
            <div className="bw_container">
                <div className="bw_user_search">
                    {/* Fetch users from API, Search, Loading state, Error state */}
                    <div className="bw_input_btn_wrap">
                        <input type="text" className="bw_input" placeholder="Search User" value={val} onChange={handleChange}/>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={userSearch}>Search</button>
                    </div>
                    {loading && <p>Loading users...</p>}
                    {error && <p>{error}</p>}
                    {
                        !loading && !error && (
                            <div className="bw_user_card_wrap"> 
                                {
                                    userFilter.map((userData)=>(
                                        <div className="bw_user_card" key={userData.id}>
                                            <h3>{userData.firstName} {userData.lastName}</h3>
                                            <div className="bw_user_info">
                                                <h4>{userData.age}</h4>
                                                <h4>{userData.gender}</h4>
                                            </div>
                                            <div className="bw_user_info">
                                                <h5>{userData.height} cm</h5>
                                                <h5>{userData.weight} kg</h5>
                                            </div>
                                            <div className="bw_user_detail">
                                                <h6>
                                                    <a href={`mailto:${userData.email}`}>{userData.email}</a>
                                                </h6>
                                                <h6>
                                                    <a href={`tel:${userData.phone}`}>{userData.phone}</a>
                                                </h6>
                                            </div>
                                            <p>{userData.address.address}, {userData.address.city}, {userData.address.state}, {userData.address.country}</p>
                                        </div>
                                    ))
                                } 
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default UserSearch;