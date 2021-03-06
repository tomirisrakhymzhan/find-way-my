import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';

export default function GenerateMazeDropdown(props){
    const [isOpen, setIsOpen] = React.useState(false) 
    var handleDFSMaze = props.handleDFSMaze;
    var handleRandomMaze = props.handleRandomMaze;
    function toggle(){
        setIsOpen(!isOpen)
    }
    return(
        
            <ButtonDropdown
                isOpen={isOpen}
                toggle={toggle}>
                <DropdownToggle color="primary" caret>
                    Generate Maze
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={()=> {handleDFSMaze()}}>Depth-First-Search</DropdownItem>
                    <DropdownItem onClick={()=> {handleRandomMaze()}}>Random Maze</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        
        
    );
}