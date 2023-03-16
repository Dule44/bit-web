import { useState } from "react"
import "./Giphy.css";

export const Gyphy = () =>{
    const [gifs, setGifs] = useState([])
    const  [information, setInformation] = useState("")
    
    const onChangeHandler = (e) => {
        setInformation(e.target.value)
    };
    const onClickHandler = () => {
        let API_KEY = "BvCidyoztQ9D5LmeffMxEQ7t0Eje5b0i"
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=12&q=${information}`)
        .then((response) => response.json())
        .then((data) => {
            setGifs(data.data)
        })
    }
    return(
        <div className="container">
            <div className="searchMain">
                <label>Search Giphy</label>
                <input id="searchInput" type="search" value={information} onChange={onChangeHandler} />
                <button id="btn" onClick={onClickHandler}>Submit</button>
            </div>
            <div id="results">
                {gifs.map(item => (
                    <div className="card"><img src={item.images.original.url} className="gif" alt="gif"/></div>
                ))}
            </div>
        </div>  
    )
}