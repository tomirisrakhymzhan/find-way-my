import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
export default function SelectSpeedDropdown(props){
    const [isOpen, setIsOpen] = React.useState(false) 
    function toggle(){
        setIsOpen(prev =>(!prev))
    }
    return(
        <ButtonDropdown
        isOpen={isOpen}
       toggle={toggle}>
        <DropdownToggle color="primary"caret>
            Select speed
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem>
            Slow
            </DropdownItem>
            <DropdownItem>
            Medium
            </DropdownItem>
            <DropdownItem>
            Fast
            </DropdownItem>
        </DropdownMenu>
        </ButtonDropdown>
    );
}