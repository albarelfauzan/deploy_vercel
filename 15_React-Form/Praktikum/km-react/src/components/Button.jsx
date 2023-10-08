const Button = ({ label, style, onClick }) => {
  return (
    <button type="submit" className="btn" style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
