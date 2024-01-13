import css from './App.module.css';

import { Component } from 'react';

import { nanoid } from 'nanoid';

export class App extends Component {

  idName = nanoid();
  idNumber = nanoid();

  render() {

    const {idName, idNumber} = this;

    return (
      <div className={css.box}>
        <form className={css.form}>
          <label htmlFor={idName}>Name</label>
          <input
            id={idName}
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={idNumber}>Number</label>
          <input
            id={idNumber}
            placeholder="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
        <div className={css.contact_block}>
          <form className={css.form_find}>
            <label>Find contacts by name</label>
            <input placeholder="Filter" />
          </form>
          <ol className={css.list}>
            <li className={css.list_element}>
              Vasya Pupkin +3809955555{' '}
              <button className={css.btn_delete} type="submit">
                Delete
              </button>
            </li>
            <li className={css.list_element}>
              Vasya Pupkin +3809955555{' '}
              <button className={css.btn_delete} type="submit">
                Delete
              </button>
            </li>
            <li className={css.list_element}>
              Vasya Pupkin +3809955555{' '}
              <button className={css.btn_delete} type="submit">
                Delete
              </button>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
