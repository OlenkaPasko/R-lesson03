import css from './App.module.css';
import UserForm from '../UserForm/UserForm';

export default function App() {
  const addUser = (newUser) => {
    console.log("Send to backend", newUser);
  };
  return (
    <div className={css.container}>
      <h1>Forms in React</h1>
      <UserForm onAdd={addUser} />
    </div>
  );
}
