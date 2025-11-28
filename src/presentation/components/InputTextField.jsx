function InputTextField({ value, onValueChange, onSearchClick }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="Введите текст"
        className="text-input"
      />
      <button className="search-button" onClick={onSearchClick}>
        Search
      </button>
    </div>
  );
}

export default InputTextField;
