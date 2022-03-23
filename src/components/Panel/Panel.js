import React from 'react';
import { Button,  ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import Dropdown from './Dropdown';

export default function Panel(props) {
  var handleDropdown = props.handleDropdown;
    
    return (
      <div>
        <ButtonGroup className='panel--btngroup'>
          <Dropdown header="Generate maze"
                    options={["Kruskal's Algorithm", "Recursive division", "Depth-First-Search"]}
                    handleDropdown={handleDropdown}></Dropdown>
          <Dropdown header="Choose Algorithm"
                    options={["A* start", "Breadth-depth search", "Depth-first search"]}
                    handleDropdown={handleDropdown}></Dropdown>
          <Dropdown header="Speed"
                    options={["Slow", "Medium", "Fast"]}
                    handleDropdown={handleDropdown}></Dropdown>
          <Button color="primary">
              Start
          </Button>
        </ButtonGroup>
      </div>
    
  );
};
