import css from "./OrderForm.module.css";

//import { FaTshirt } from "react-icons/fa";

export default function OrderForm() {
  return (
    <form autoComplete="off" noValidate className={css.form}>
          {/*<FaTshirt size="160" color={values.color} />*/}
      <div className={css.group}>
        <label>Size</label>
        <select name="size">
          <option value="sm"></option>
          <option value="md"></option>
          <option value="lg"></option>
        </select>
      </div>

      <div className={css.group}>
        <label>Color</label>
        <select name="color">
          <option value="red"></option>
          <option value="green"></option>
          <option value="blue"></option>
        </select>
          </div>
          <button type="submit">Submit</button>
    </form>
  );
}
