import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

import { DropdownMenu } from './DropdownMenu/DropdownMenu'
import { DropdownMenuItem } from './DropdownMenu/DropdownMenuItem'

class App extends Component {
  render() {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuItem onSelect={() => alert('Delete')}>
            <FaTrash size={16} color="blue" />
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert('Edit')}>Edit</DropdownMenuItem>
        </DropdownMenu>
      </div>
    );
  }
}

export default App;