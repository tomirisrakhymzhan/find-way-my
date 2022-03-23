import React from "react";

export default function DFSMaze(props){
    const size = props.size;
    const rows = props.rows;
    const columns = props.columns;

    const [grid, setGrid] = React.useState([]);
    const [stack, setStack] = React.useState([]);
    function setup(){

    }
    React.useEffect(()=>{
        setup();
    })
    return(
        <div></div>
    );
}