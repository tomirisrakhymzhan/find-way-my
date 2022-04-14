import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';

export default function PathfindingAlgorithmDropdown(props){
    const [isOpen, setIsOpen] = React.useState(false) 
    var handleBFSPathfinder = props.handleBFSPathfinder;
    function toggle(){
        setIsOpen(!isOpen)
    }
    const options=["A* star", "Breadth-First search", "Depth-First search"]
    return(
        
            <ButtonDropdown
                isOpen={isOpen}
                toggle={toggle}>
                <DropdownToggle color="primary" caret>
                    Choose Pathfinding Algorithm
                </DropdownToggle>
                <DropdownMenu>
                {/* {options.map(option => (
                                <DropdownItem onClick={()=>handleDropdown(option)}>
                                {option}
                                </DropdownItem>
                            ))} */}
                    <DropdownItem onClick={()=>{handleBFSPathfinder()}}>Breadth-First search</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
       
        
    );
}