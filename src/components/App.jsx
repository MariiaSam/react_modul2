import { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
// import { Collapsible } from 'components/Collapsible/Collapsible';
// import { Container } from './App.styled';
// import { Tooltip } from 'components/Tooltip/Tooltip';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
import { DropdownMenuItem } from 'components/DropdownMenu/DropdownMenuItem';
// import { VideoList } from 'components/VideoList/VideoList';
// import videos from '../../videos.json';

export const App = ()=> {
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
    )
};