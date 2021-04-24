import {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ListGroup from 'react-bootstrap/ListGroup'
import AddTodoItem from '../add-todo-item';
import TodoItem from '../todo-item';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [
        {text: "заглушка 1", id: 1},
        {text: "заглушка 2", id: 2},
        {text: "заглушка 3", id: 3}
      ]
    }

    this.submitTodoItem = this.submitTodoItem.bind(this);
    this.changeTodoItem = this.changeTodoItem.bind(this);
    this.removeTodoItem = this.removeTodoItem.bind(this);

    this.nextId = 4;
  }

  submitTodoItem(e) {
    e.preventDefault();
    this.setState(({value, items}) => {
      const newItem = {text: value, id: this.nextId};
      const newArray = [...items, newItem];

      this.nextId++;

      return {
        items: newArray,
        value: ''
      }
    });
  }

  changeTodoItem(e) {
    this.setState({
      value: e.target.value,
    });
  }

  removeTodoItem(id) {
    this.setState(({items}) => {
      const index = items.findIndex(elem => elem.id === id);

      const before = items.slice(0, index);
      const after = items.slice(index + 1);

      const newArray = [...before, ...after];
      return {
        items: newArray
      }
    });
  } 



  render() {
    const todoItems = this.state.items.map((item, i) => {
      return (
        <TodoItem key={i} text={item.text} todoIndex={item.id} removeTodoItem={this.removeTodoItem}/>
      )
    });

    const itemsAmount = this.state.items.length;

    return (
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs lg="9">
            <ListGroup>
              <AddTodoItem
                handleSubmit={this.submitTodoItem}
                handleChange={this.changeTodoItem}
                addValue={this.state.value}
                itemsAmount={itemsAmount} />
              {todoItems}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;