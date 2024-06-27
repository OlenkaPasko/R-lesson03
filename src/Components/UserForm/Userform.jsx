import css from "./UserForm.module.css";

export default function UserForm() {
  //у формі є сабміт,  передаємо handleSubmit, за змовчуванням event
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(handleSubmit);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.grup}>
        <label>Username:</label>
        <input type="text" name="username"></input>
      </div>
      <div className={css.grup}>
        <label>Role:</label>
        <select name="role">
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <buton type="submit">Submit</buton>
    </form>
  );
}
