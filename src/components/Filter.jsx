// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "./redux/store";

const Filter = () => {
    const value = useSelector( store => store.filter);
    const dispatch = useDispatch();
    // console.log("Value:",value);

    const onFilterChange = (e) => {
        const { value } = e.target;

        dispatch(setFilter(value));
    };

    return (
        <div>
            <label>Filter names</label>
            <input onChange={onFilterChange} type="text" value={value} />
        </div>
    );
};
// Filter.propTypes = {
//     onFilterChange: PropTypes.func.isRequired,
//     value:PropTypes.string.isRequired,
// };

export default Filter;