import css from './App.module.css';

import { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContactForm from './AddContactForm/AddContactForm';
import Phonebook from './Phonebook/Phonebook';

class App extends Component {
  state = {
    
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'}],
    filter: '',

  };

  dublicateName({name}) {
    const normalizeName = name.toLowerCase().replaceAll(' ', '');
    const { contacts } = this.state;

    const dublicate = contacts.find(item => {
      const normalizeCurrentName = item.name.toLowerCase().replaceAll(' ', '');
      return normalizeCurrentName === normalizeName;
    });

    return Boolean(dublicate)

  }

  addContact = info => {
    const {name} = info;

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
