import PropTypes from 'prop-types';

const ContactList = ({contacts, onClick}) => {
    return (
        <ul>
            {contacts.map(cont => (<li key={cont.id}>
                <span>{cont.name}:</span>
                <span>{cont.number}</span>
                <button onClick={()=>onClick(cont.id)}>Delete</button>
            </li>))}
        </ul>
    );
};
ContactList.defaultProps = {
    contacts:[],
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    }),),
    onClick: PropTypes.func.isRequired,
};

export default ContactList;