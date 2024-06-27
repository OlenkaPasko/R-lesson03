import css from "./UserForm.module.css";

export default function UserForm({ onAdd }) {
  //у формі є сабміт,  передаємо handleSubmit, за змовчуванням event
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    onAdd({
      username: form.elements.username.value,
      role: form.elements.role.value,
    });

    form.reset();
    //console.log(event.turget.elements.username.value) так в неконтрольованій формі отримують значення
    // <=так зібрали поточні значення
    // console.log(handleSubmit);
    //завдання форми, збір логіки даних, все що туди пишуть
    //івент(event) Не повинен залишати компонент форми
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.group}>
        <label>Username:</label>
        <input type="text" name="username"></input>
      </div>
      <div className={css.group}>
        <label>Role:</label>
        <select name="role">
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
