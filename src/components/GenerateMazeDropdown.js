import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';

export default function GenerateMazeDropdown(props){
    const [isOpen, setIsOpen] = React.useState(false) 
    function toggle(){
        setIsOpen(prev =>(!prev))
    }
    return(
        <ButtonDropdown
        isOpen={isOpen}
       toggle={toggle}>
       <DropdownToggle color="primary" caret>
           Generate maze
       </DropdownToggle>
       <DropdownMenu>
           <DropdownItem>
           Kruskal's Algorithm
           </DropdownItem>
           <DropdownItem>
           Recursive division
           </DropdownItem>
       </DropdownMenu>
       </ButtonDropdown>
    );
}