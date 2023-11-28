import { Menu, MenuList } from '@reach/menu-button';
import { MenuButton } from './DropdownMenu.styled';

export const DropdownMenu = ({ children }) => {
  return (
    <Menu>
      <MenuButton>
        Actions <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList>{children}</MenuList>
    </Menu>
  );
};