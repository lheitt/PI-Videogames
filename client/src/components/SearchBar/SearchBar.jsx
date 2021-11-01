import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogame } from '../../actions';
import "./SearchBar.css";

function SearchBar() {
    const [search, setSearch] = useState("");
    let dispatch = useDispatch();

    function handleChange(e) {
        setSearch(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchVideogame(search));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" autoCorrect="off" onChange={handleChange} value={search}/>
            <input type="submit" value="Search" />
        </form>
    )
};

export default SearchBar;
