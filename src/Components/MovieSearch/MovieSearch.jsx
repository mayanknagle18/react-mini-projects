import { useEffect, useState } from 'react';

const MovieSearch = () => {
    const [val, setVal] = useState(""); 
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    useEffect(() => {
        fetch("https://jsonfakery.com/movies/paginated")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.data);
                setFilterData(data.data);
            })
            .catch((err) => console.log(err))
            .finally(()=>setLoading(false));
    }, []);
    const handleChange = (e) => {
        setVal(e.target.value);
    };
    const searchMovie = () => {
        const filteredData = data.filter((item)=>
        item.original_title.toLowerCase().includes(val.toLowerCase())
        )
        setFilterData(filteredData);
    };
    return (
        <div className="bw_wrap_sec">
            <h1>Movie Search</h1>
            <div className="bw_container_full">
                <div className="bw_movie_search">
                    <div className="bw_input_btn_wrap">
                        <input type="text" className="bw_input" placeholder="Enter Movie Name" value={val} onChange={handleChange}/>
                        <button type="button" className="bw_btn bw_primary_btn" onClick={searchMovie}>Search</button>
                    </div>
                    {loading ? <h4>Loading Movies...</h4> : ""}
                    {error ? <h4>Data Not Found</h4> : ""}
                    {
                        !loading && !error && (
                            <div className="bw_movie_list_card">
                                {
                                    filterData.map((item, index)=>(
                                        <div className="bw_movie_card" key={item.id}>
                                            <div className="bw_movie_img">
                                                <img src={item.poster_path} alt="" />
                                            </div>
                                            <h2>Name: {item.original_title}</h2>
                                            <h3>Language: {item.original_language}</h3>
                                            <h4>Release Date: {item.release_date}</h4>
                                            <h4>Casts</h4>
                                            <div className="bw_movie_casts">
                                                {
                                                    item.casts.slice(0, 2).map((cast) => (
                                                        <div className="bw_movie_cast_card" key={cast.id}>
                                                            <div className="bw_cast_img">
                                                                <img src={cast.profile_path} alt="" />
                                                            </div>
                                                            <h5>{cast.name}</h5>
                                                            <h5>{cast.character}</h5>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <p>{item.overview}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieSearch;