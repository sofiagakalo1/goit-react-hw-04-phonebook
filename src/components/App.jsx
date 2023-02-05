// import { PureComponent } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactsList from './ContactsList';
import ContactsFilter from './ContactsFilter';
import ContactsForm from './ContactsForm';

// import { getFromLocalStorage } from './utils/localStorage';
// import { setToLocalStorage } from './utils/localStorage';

import css from './app.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const myContacts = localStorage.getItem('contacts');
    const localStorageContacts = myContacts ? JSON.parse(myContacts) : [];
    return localStorageContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const isAlreadyExists = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    return Boolean(result);
  };

  const addContact = ({ name, number }) => {
    // console.log(this.state);
    if (isAlreadyExists(name)) {
      return alert(`${name} is already in your contacts!`);
    }
    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  const acceptedContacts = getFilteredContacts();

  return (
    <>
      <div className={css.block}>
        <div className={css.wrapper}>
          <h2 className={css.h2}>Phonebook</h2>
          <ContactsForm onSubmit={addContact} />
        </div>
        <div className={css.wrapper}>
          <h3 className={css.h3}>Contacts</h3>
          <ContactsFilter onInputChange={handleFilter} filter={filter} />
          <ContactsList
            deleteContact={deleteContact}
            acceptedContacts={acceptedContacts}
          />
        </div>
      </div>
    </>
  );
};

// export class App extends PureComponent {
//   state = {
//     contacts: [],
//     filter: '',
//   };

// componentDidMount() {
//   // console.log('componentDidMount');
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }
// componentDidUpdate(prevProps, prevState) {
//   // console.log('componentDidUpdate');
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }
//   componentWillUnmount() {
//     // console.log('componentWillUnmount');
//   }

// deleteContact = id => {
//   this.setState(({ contacts }) => {
//     const newContacts = contacts.filter(contact => contact.id !== id);
//     return { contacts: newContacts };
//   });
// };

// isAlreadyExists(name, number) {
//   const { contacts } = this.state;
//   const normalizedName = name.toLowerCase();
//   const result = contacts.find(({ name }) => {
//     return name.toLowerCase() === normalizedName;
//   });
//   return Boolean(result);
// }

//   addContact = ({ name, number }) => {
//     // console.log(this.state);
//     if (this.isAlreadyExists(name)) {
//       return alert(`${name} is already in your contacts!`);
//     }
//     this.setState(prevState => {
//       const { contacts } = prevState;
//       const newContact = {
//         id: nanoid(),
//         name,
//         number,
//       };
//       return { contacts: [newContact, ...contacts], name: '', number: '' };
//     });
//   };

//   getFilteredContacts() {
//     const { filter, contacts } = this.state;
//     if (!filter) {
//       return contacts;
//     }
//     const normalizedFilter = filter.toLowerCase();
//     const result = contacts.filter(({ name }) => {
//       return name.toLowerCase().includes(normalizedFilter);
//     });
//     return result;
//   }

//   handleFilter = ({ target }) => {
//     this.setState({ filter: target.value });
//   };

//   render() {
//     // console.log('render');
//     const { addContact, deleteContact, handleFilter } = this;
//     const { filter } = this.state;
// const acceptedContacts = this.getFilteredContacts();

//     return (
// <>
//   <div className={css.block}>
//     <div className={css.wrapper}>
//       <h2 className={css.h2}>Phonebook</h2>
//       <ContactsForm onSubmit={addContact} />
//     </div>
//     <div className={css.wrapper}>
//       <h3 className={css.h3}>Contacts</h3>
//       <ContactsFilter onInputChange={handleFilter} filter={filter} />
//       <ContactsList
//         deleteContact={deleteContact}
//         acceptedContacts={acceptedContacts}
//       />
//     </div>
//   </div>
// </>
//     );
//   }
// }
