export default function LangSwitcher({ value, onSelect }) {
  return (
    <div>
      <span>Lang switcher</span>
      <select value={value}>
        <option value="uk">uk</option>
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select>
    </div>
  );
}
