// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const Filter = () => {
    const filterRezult = useSelector(({ filter }) => filter);

    return (
        <div>
            <label>Filter names</label>
            <input onChange={"onFilterChange"} type="text" value={filterRezult} />
        </div>
    );
};
// Filter.propTypes = {
//     onFilterChange: PropTypes.func.isRequired,
//     value:PropTypes.string.isRequired,
// };

export default Filter;