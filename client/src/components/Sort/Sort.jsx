import { React, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sort } from '../../store/actions';
import "./Sort.css";

function Sort() {
    const filter = useSelector(state => state.filter);
    let order = useRef();
    useEffect(() => {
        let value = order.current;
        value.value = "default";
    }, [filter]) 
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(sort(e.target.value));
    };

    return (
        <select ref={order} name="order" onChange={handleChange}>
            <option value="default" hidden>Order by...</option>
            <option value="Name" disabled>Name</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="Rating" disabled>Rating</option>
            <option value="1-9">0-5</option>
            <option value="9-1">5-0</option>
        </select>
    )
};

export default Sort;
