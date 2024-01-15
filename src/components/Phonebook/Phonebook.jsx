import css from './Phonebook.module.css';

const Phonebook = ({ items }) => {
    
  const elements = items.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}{' '}
      <button className={css.btn_delete} type="submit">
        Delete
      </button>
    </li>
  ));

  return (
    <div>
      <form className={css.form_find}>
        <label>Find contacts by name</label>
        <input placeholder="Filter" />
      </form>
      <ol className={css.list}>{elements}</ol>
    </div>
  );
};

export default Phonebook;
