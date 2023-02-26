// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, getContacts, getFilter } from "./redux/slice";
// import { deleteContact } from "./redux/action";

const ContactList = () => {
    const contactsStore = useSelector(getContacts);
    const filterStore = useSelector(getFilter);
    const dispatch = useDispatch();
    // console.log(contactsStore);

    const onClickTakeId = (id) => {
        dispatch(deleteContact(id));
    };

    // console.log(contactsStore);
    const normalizeFilter = filterStore.toLowerCase().trim();
    const visiblePersons = contactsStore.filter(cont => cont.name.toLowerCase().includes(normalizeFilter));
    return (
        <ul>
            {visiblePersons.map(cont => (
                <li key={cont.id}>
                    <span>{cont.name}:</span>
                    <span>{cont.number}</span>
                    <button onClick={()=>onClickTakeId(cont.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
// ContactList.defaultProps = {
//     contacts:[],
// }
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number:PropTypes.string.isRequired,
//     }),),
//     onClick: PropTypes.func.isRequired,
// };

export default ContactList;