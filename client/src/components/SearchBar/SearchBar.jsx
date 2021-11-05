import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogame } from '../../store/actions';
import "./SearchBar.css";

function SearchBar() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchVideogame(search));
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input style={{fontSize: "1.5rem"}} type="text" autoCorrect="off" onChange={handleChange} value={search}/>
            <input className="search-button" type="submit" value="Search" />
        </form>
    )
};

export default SearchBar;
