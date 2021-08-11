import Button from "./Button";

const Header = () => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>Reading List</h1>
      <Button color="#055052" text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
