import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Counter from '../counter';

import './add-todo-item.css';

const AddTodoItem = (props) => {
  return (
    <Form onSubmit={props.handleSubmit} className="form">
      <label className="label">
        <Counter all={props.itemsAmount}/>
        <Form.Control
          placeholder="What you want to do ?"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={props.addValue}
          onChange={props.handleChange}
        />
        <Button type="submit" variant="outline-primary">Add</Button>
      </label>
    </Form>
  );
} 


export default AddTodoItem;