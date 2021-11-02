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
        <form onSubmit={handleSubmit}>
            <input type="text" autoCorrect="off" onChange={handleChange} value={search}/>
            <input type="submit" value="Search" />
        </form>
    )
};

export default SearchBar;
