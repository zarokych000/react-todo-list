const TodoItemControlBtn = (props) => {
  return (
    <span className="fs-1" onClick={props.removeTodoItem}>
      <i className="far fa-trash-alt"></i>
    </span>
  );
};

export default TodoItemControlBtn;