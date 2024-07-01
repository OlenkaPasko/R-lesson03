export default function LangSwitcher({ value, onSelect }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };
  return (
    <div>
      <span>Lang switcher</span>
      <select value={value} onChange={handleChange}>
        <option value="uk">uk</option>
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select>
    </div>
  );
}
