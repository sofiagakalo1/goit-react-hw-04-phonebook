import PropTypes from 'prop-types';
import css from './contactsList.module.css';

import ContactsListItem from './ContactsListItem';

const ContactsList = ({ deleteContact, acceptedContacts }) => {
  const allContacts = acceptedContacts.map(({ id, name, number }) => (
    <ContactsListItem
      key={id}
      id={id}
      deleteContact={deleteContact}
      name={name}
      number={number}
    />
  ));
  return <ul className={css.ul}>{allContacts}</ul>;
};

ContactsList.defaultProps = {
  acceptedContacts: [],
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  acceptedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
