//import { useCallback, useState } from "react";
//import TextInput from "../TextInput/TextInput"
import ArticleList from "../ArticleList/ArticleList";;
import { useEffect, useState } from "react";
import { fetchArticles } from "../../articles-api";
import css from "./App.module.css";
import SearchForm from "../SearchForm/SearchForm";


//import UserForm from "../UserForm/UserForm";
//import LangSwitcher from "../LangSwitcher/LangSwitcer";
//import OrderForm from "../OrderForm/OrderForm";

export default function App() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //useEffect(() => {
    //axios.get("http://hn.algolia.com/api/v1/search?query=react").then().catch().finally();
   // async function getArticles() {
    //  try {
     //   setLoading(true);
     //   const data = await fetchArticles("react");
     //   setArticles(data);
     // } catch (error) {
     //   setError(true);
     // } finally {
     //   setLoading(false);
     // }
    //}
   // getArticles();
  //}, []);
  //маємо три стани і так працюємо з шттп запитом, патрн. 1,2 вар.
  const handleSearch = async (newTopic) => {
    try {
      setLoading(true);
      const data = await fetchArticles(newTopic)
      setArticles(data);//це буде по результату
    } catch(error) {
      setError(true);
      
    } finally {
      setLoading(false);
    }
}

  //const addUser = (newUser) => {
  // console.log("Adding new user", newUser);
  // };
  //1частина  2частина<h1>Forms with Formik</h1> <UserForm onAdd={addUser} />;

  // const addUser = (newUser) => {
  // console.log("Send to backend", newUser);
  // };
  //const [lang, setLang] = useState("en");
  //const changeLang = newLange => {
  //  setLang(newLange);
  //}
  // контрольваний елемент, не форма, інпут значення якого  зберігається в стані
  //у контрольованого елемента є два пропси, перший - це Value/ inputValue- це поточне значення стану
  //руга частина, це кожен раз коли ми змінюємо значення елементу, поія інпут, а в Реакті onChange.
  //Це поточне значення потрібно записати в стан, оголошуємо handleChange
  //const [inputValue, setInputValue] = useState("");
  //const changeInputValue = (newValue) => {
  // setInputValue(newValue);
  //};
  //const handleChange = (event) => {
  // console.log(event.target.value);
  // setInputValue(event.target.value);
  //const handleChange = (event) => {
  //console.log(event.target.value);
  //setInputValue(event.target.value);
  //}
  //const makeOrder = (newOrder) => {
  // console.log("Make new order", newOrder);
  //}

  return (
    <div className={css.container}>
      <h1>HTTP requests in React</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading articles...</p>}
      {error && <p>Oops...The was an error,pleas reload this page</p>}
      {/*Не треба рендерити порожній елемент,завжди є умова/в даному кейсі не буде порожнього юл, а буде рендеритися коли приходитимуть дані з бекенду */}
      {articles.length > 0 && <ArticleList items={articles} />}

      {/*<h1>Forms with Formik</h1>
      <UserForm onAdd={addUser} />

      {/*<h1>Forms in React</h1>*/}
      {/*<header>
        <LangSwitcher value={lang} onSelect={changeLang} />
      </header>
      <TextInput value={inputValue} onType={changeInputValue} />
      {/*<div>
        <input type="text" value={inputValue} onChange={handleChange} />
      </div>*/}
      {/*<UserForm onAdd={addUser} />*/}
      {/*<OrderForm onOrder={makeOrder} />*/}
    </div>
  );
}
