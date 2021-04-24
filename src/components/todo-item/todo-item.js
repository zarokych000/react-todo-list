import ListGroup from 'react-bootstrap/ListGroup';
import TodoItemControlBtn from '../todo-item-control-btn';

import './todo-item.css';

const TodoItem = (props) => {
  const {text, todoIndex, removeTodoItem} = props;
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {text}
      <TodoItemControlBtn removeTodoItem={() => removeTodoItem(todoIndex)}/>
    </ListGroup.Item>
  );
};

export default TodoItem;