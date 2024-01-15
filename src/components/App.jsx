import css from './App.module.css';

import { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContactForm from './AddContactForm/AddContactForm';
import Phonebook from './Phonebook/Phonebook';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  dublicateName({ name }) {
    const normalizeName = name.toLowerCase().replaceAll(' ', '');
    const { contacts } = this.state;

    const dublicate = contacts.find(item => {
      const normalizeCurrentName = item.name.toLowerCase().replaceAll(' ', '');
      return normalizeCurrentName === normalizeName;
    });

    return Boolean(dublicate);
  }

  addContact = info => {
    const { name } = info;

    if (this.dublicateName(info)) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...info,
      };

      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const updatedContacts = contacts.filter(item => item.id !== id);

      return {
        contacts: updatedContacts,
      };
    });
  };

  render() {
    const { contacts } = this.state;
    const { addContact, deleteContact } = this;

    return (
      <div className={css.box}>
        <h1>Phonebook</h1>
        <AddContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Phonebook items={contacts} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default App;
