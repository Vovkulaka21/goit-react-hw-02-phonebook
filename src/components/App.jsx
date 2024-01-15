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

  addContact = info => {
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

  render() {
    const { contacts } = this.state;
    const { addContact } = this;

    return (
      <div className={css.box}>
        <h1>Phonebook</h1>
        <AddContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Phonebook items={contacts} />
      </div>
    );
  }
}

export default App;
