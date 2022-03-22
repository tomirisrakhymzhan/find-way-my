import React from 'react';
import { Button,  ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import Dropdown from './Dropdown';

export default function Panel(props) {
    return (
    <ButtonGroup className='panel--btngroup'>
      <Dropdown header="Generate maze"
                options={["Kruskal's Algorithm", "Recursive division"]}></Dropdown>
      <Dropdown header="Choose Algorithm"
                options={["A* start", "Breadth-depth search", "Depth-first search"]}></Dropdown>
      <Dropdown header="Speed"
                options={["Slow", "Medium", "Fast"]}></Dropdown>
      <Button color="primary">
          Start
      </Button>
    </ButtonGroup>
  );
};
