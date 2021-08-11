import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function List(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  function deleteHandler() {
    setmodalIsOpen(true);
  }
  function closeModalHandler() {
    setmodalIsOpen(false);
  }

  return (
    <div className="card">
      <div>
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen ? (
        <Modal onNo={closeModalHandler} onYes={closeModalHandler} />
      ) : null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
}

//export makes the list function available so it can be used in other files
export default List;
