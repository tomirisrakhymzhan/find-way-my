import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
export default function ChooseAlgorithmDropdown(props){
    const [isOpen, setIsOpen] = React.useState(false) 
    function toggle(){
        setIsOpen(prev =>(!prev))
    }
    return(
        <ButtonDropdown
        isOpen={isOpen}
       toggle={toggle}>
        <DropdownToggle color="primary" caret>
            Choose Algorithm
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem>
            A* search
            </DropdownItem>
            <DropdownItem>
            Depth-first search
            </DropdownItem>
            <DropdownItem>
            Breadth-first search
            </DropdownItem>
        </DropdownMenu>
        </ButtonDropdown>
    );
}