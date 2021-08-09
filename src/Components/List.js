function List(props) {
  function deleteHandler() {
    return console.log("delete requested");
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h3>Author: {props.author}</h3>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

//export makes the list function available so it can be used in other files
export default List;
