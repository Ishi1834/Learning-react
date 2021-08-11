const Button = ({ color, text }) => {
  const onClick = () => {
    console.log("add requested");
  };
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
