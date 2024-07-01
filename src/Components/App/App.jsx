import { useCallback, useState } from "react";
import TextInput from "../TextInput/TextInput";
import css from "./App.module.css";
//import UserForm from '../UserForm/UserForm';
import LangSwitcher from "../LangSwitcher/LangSwitcer";

export default function App() {
  const addUser = (newUser) => {
    console.log("Send to backend", newUser);
  };
  const [lang, setLang] = useState("en");
  const changeLang = newLange => {
    setLang(newLange);
  }




  // контрольваний елемент, не форма, інпут значення якого  зберігається в стані
  //у контрольованого елемента є два пропси, перший - це Value/ inputValue- це поточне значення стану
  //руга частина, це кожен раз коли ми змінюємо значення елементу, поія інпут, а в Реакті onChange.
  //Це поточне значення потрібно записати в стан, оголошуємо handleChange
  const [inputValue, setInputValue] = useState("");
  const changeInputValue = (newValue) => {
    setInputValue(newValue);
  };
  //const handleChange = (event) => {
  // console.log(event.target.value);
  // setInputValue(event.target.value);
  //const handleChange = (event) => {
  //console.log(event.target.value);
  //setInputValue(event.target.value);
  //}
  return (
    <div className={css.container}>
      <h1>Forms in React</h1>
      <header>
        <LangSwitcher value={lang} onSelect={changeLang} />
      </header>
      <TextInput value={inputValue} onType={changeInputValue} />

      {/*<div>
        <input type="text" value={inputValue} onChange={handleChange} />
      </div>*/}
      {/*<UserForm onAdd={addUser} />*/}
    </div>
  );
}
