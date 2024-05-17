
function Input({ type, placeholder, name, onChange, value, className }) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
}

export default Input;
