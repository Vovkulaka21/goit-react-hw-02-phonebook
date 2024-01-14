import css from './App.module.css';

import { Component } from 'react';

// import { nanoid } from 'nanoid';

import AddContactForm from './AddContactForm/AddContactForm';

class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  render() {

    return (

      <div className={css.box}>
        <AddContactForm/>
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

export default App