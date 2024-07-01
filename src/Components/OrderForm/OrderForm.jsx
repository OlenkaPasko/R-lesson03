import css from "./OrderForm.module.css";
import { useId , useState } from "react";
//import { FaTshirt } from "react-icons/fa";

const initialValues = {
  size: "sm",
  color: "red",
  message: "",
};
//[event.target.name]обчислювальні дані об'єкта з квадратними дужками

export default function OrderForm({ onOrder }) {
  const fieldId = useId();
   const [values, setValues] = useState(initialValues);
  //одна унівесальна функція,яка змінює будь що (coputer propertis)
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onOrder(values);
    setValues(initialValues);
}
  // const handleChangeSize = (event) => {
  //   console.log(event.target.name);
  //   setValues({
  //     ...values,
  //     size: event.target.value,
  //   });
  // };

  // const handleChangeColor = (event) => {
  //   console.log(event.target.name);
  //   setValues({
  //     ...values,
  //     color: event.target.value,
  //   });
  // };
  return (
    <form
      autoComplete="off"
      noValidate
      className={css.form}
      onSubmit={handleSubmit}
    >
      {/*<FaTshirt size="160"/>*/}
      <div className={css.group}>
        <label htmlFor={`size-${fieldId}`}>Size</label>
        <select
          name="size"
          value={values.size}
          id={`size-${fieldId}`}
          onChange={handleChange}
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div className={css.group}>
        <label htmlFor={`color-${fieldId}`}>Color</label>
        <select
          name="color"
          value={values.color}
          id={`color-${fieldId}`}
          onChange={handleChange}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
