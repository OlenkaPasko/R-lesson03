import css from "./UserForm.module.css";

export default function UserForm() {
  return (
    <form className={css.form}>
      <div className={css.grup}>
        <label> Username:</label>
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
