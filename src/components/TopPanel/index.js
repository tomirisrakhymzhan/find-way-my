import React from "react";
import DropDown from "./Dropdown";
import styled from "styled-components";

const Main = styled("div")`
    display: flex;
    align-content: center
    justify-content: center;
    flex-direction: row;
    font-family: sans-serif;
    height: 100vh;

`;
export default function TopElements(){
    return (
        <Main>
            <DropDown header="Generate maze"
                      options={["Kruskal's Algorithm", "Recursive division"]}>
            </DropDown>
            <DropDown header="Choose Algorithm"
                      options={["A* search", "Depth-first search", "Breadth-first search"]}>
            </DropDown>
            <DropDown header="Speed"
                      options={["Slow", "Medium", "Fast"]}>
            </DropDown>
        </Main>
        
    );
}