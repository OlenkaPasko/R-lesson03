
export default function TextInput({ value,onType}) {
  const handleChange = (event) => {
    onType(event.target.value);
  };
  return (
    <div>
      <span> Text input</span>
      <input type="text" value={value} onChange={handleChange}/>
    </div>
  );
}
