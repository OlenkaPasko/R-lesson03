import { useId } from "react";
import css from "./UserForm.module.css";

export default function UserForm({ onAdd }) {
  //Не може бути на одній сторінці дві форми з однаковими id,
  //тому, щоб згенерувати індетифікатор форми, в Ректі є хук.Він викор.Тільки для генерації айді
  const id = useId();

  //у формі є сабміт,  передаємо handleSubmit, за змовчуванням event
  //це приклад неконтрольованої форми
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    onAdd({
      username: form.elements.username.value,
      role: form.elements.role.value,
    });

    form.reset(); //скидає в початкове значення

    //console.log(event.turget.elements.username.value) так в неконтрольованій формі отримують значення
    // <=так зібрали поточні значення
    // console.log(handleSubmit);
    //завдання форми, збір логіки даних, все що туди пишуть
    //івент(event) Не повинен залишати компонент форми
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.group}>
        <label htmlFor={`username-${id}`}>Username:</label>
        <input type="text" name="username" id={`username-${id}`}></input>
      </div>
      <div className={css.group}>
        <label htmlFor={`role-${id}`}>Role:</label>
        <select name="role" id={`role-${id}`}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
