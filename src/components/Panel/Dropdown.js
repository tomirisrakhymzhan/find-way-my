import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';

export default function Dropdown(props){
    const options = props.options;
    const header = props.header;
    const [isOpen, setIsOpen] = React.useState(false) 
    var handleDropdown = props.handleDropdown;
    function toggle(){
        setIsOpen(!isOpen)
    }
    // function handleDropdown(dropdownClickInfo){
    //     props.handleDropdown();
    // }
    return(
        <ButtonDropdown
        isOpen={isOpen}
       toggle={toggle}>
       <DropdownToggle color="primary" caret>
           {header}
       </DropdownToggle>
       <DropdownMenu>
       {options.map((option, i) => (
                    <DropdownItem  key={i}
                                   onClick={()=>handleDropdown({header, option})}
                    >
                        {option}
                    </DropdownItem>
                ))}
       </DropdownMenu>
       </ButtonDropdown>
    );
}