import React, { Component } from 'react';
// import { FaTrash } from 'react-icons/fa';

// import { DropdownMenu } from '../components/DropdownMenu/DropdownMenu'
// import { DropdownMenuItem } from '../components/DropdownMenu/DropdownMenuItem'

import TodoList from './TodoList/TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id_1', text: 'Learn', completed: true },
      { id: 'id_2', text: 'Counter', completed: true },
      { id: 'id_3', text: 'Redux', completed: false },
    ], 
  };


  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;

    const completedCount = todos.length

    const completedTodosCount = todos.reduce((acc, todo) => todo.completed ? acc + 1 : acc, 0, )

    return (
      <div>
        {/* <DropdownMenu> 
          <DropdownMenuItem onSelect={() => alert('Delete')}>
            <FaTrash size={16} color="blue" />
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert('Edit')}>Edit</DropdownMenuItem>
        </DropdownMenu> */}
        <div>
          <p> Загальна кількість: {completedCount}  </p>
          <p> Загальна кількість виконаних: {completedTodosCount} </p>
         </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
