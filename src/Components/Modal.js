function Modal(props) {
  function noHandler() {
    props.onNo();
  }
  function yesHandler() {
    props.onYes();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={noHandler}>
        No
      </button>
      <button className="btn" onClick={yesHandler}>
        Yes
      </button>
    </div>
  );
}

export default Modal;
