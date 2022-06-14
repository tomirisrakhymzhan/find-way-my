import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';

export default function PathfindingAlgorithmDropdown(props){
    const [isOpen, setIsOpen] = React.useState(false) 
    var handleBFSPathfinder = props.handleBFSPathfinder;
    var handleDFSPathfinder = props.handleDFSPathfinder;
    var handleAstarPathfinder = props.handleAstarPathfinder;
    var handleDijkstraPathfinder = props.handleDijkstraPathfinder;

    function toggle(){
        setIsOpen(!isOpen)
    }
    return(
        
            <ButtonDropdown
                isOpen={isOpen}
                toggle={toggle}>
                <DropdownToggle color="primary" caret>
                    Choose Pathfinding Algorithm
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={()=>{handleBFSPathfinder()}}>Breadth-First search</DropdownItem>
                    <DropdownItem onClick={()=>{handleDFSPathfinder()}}>Depth-First search</DropdownItem>
                    <DropdownItem onClick={()=>{handleDijkstraPathfinder()}}>Dijkstra search</DropdownItem>
                    <DropdownItem onClick={()=>{handleAstarPathfinder()}}>A star search</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
       
        
    );
}