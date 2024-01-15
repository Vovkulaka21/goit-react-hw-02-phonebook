import css from './Phonebook.module.css';

const Phonebook = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}{' '}
      <button onClick={() => deleteContact(id)} className={css.btn_delete} type="button">
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
