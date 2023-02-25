// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "./redux/store";
// import { deleteContact } from "./redux/action";

const ContactList = () => {
    const contactsStore = useSelector(({store}) => store.contacts);
    const dispatch = useDispatch();

    const onClickTakeId = (id) => {
        dispatch(deleteContact(id));
    };

    // console.log(contactsStore);
    return (
        <ul>
            {contactsStore.map(cont => (
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