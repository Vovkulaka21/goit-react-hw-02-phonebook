import css from './App.module.css';

import { Component } from 'react';

// import { nanoid } from 'nanoid';

export class App extends Component {

  render() {
    
    return (
      <div className={css.box}>
        <form className={css.form}>
          <label>Name</label>
          <input
            placeholder="Vasya Pupkin"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Number</label>
          <input
            placeholder="+ country code digits"
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
            <input />
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
