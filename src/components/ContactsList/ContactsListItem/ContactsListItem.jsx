import PropTypes from 'prop-types';
import css from './contactsListItem.module.css';

const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.li}>
      <p className={css.p}>
        {name}: {number}
      </p>
      <button
        onClick={() => deleteContact(id)}
        type="button"
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
