import React, { Component } from 'react';
// import { FaTrash } from 'react-icons/fa';

// import { DropdownMenu } from '../components/DropdownMenu/DropdownMenu'
// import { DropdownMenuItem } from '../components/DropdownMenu/DropdownMenuItem'

import TodoList from './TodoList/TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id_1', text: 'Learn', completed: false },
      { id: 'id_2', text: 'Counter', completed: false },
      { id: 'id_3', text: 'Redux', completed: false },
    ],
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        {/* <DropdownMenu> 
          <DropdownMenuItem onSelect={() => alert('Delete')}>
            <FaTrash size={16} color="blue" />
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert('Edit')}>Edit</DropdownMenuItem>
        </DropdownMenu> */}

        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
