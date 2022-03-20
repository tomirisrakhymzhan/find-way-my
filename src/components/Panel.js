import React from 'react';
import { Button,  ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import GenerateMazeDropdown from './GenerateMazeDropdown';
import ChooseAlgorithmDropdown from './ChooseAlgorithmDropdown';
import SelectSpeedDropdown from './SelectSpeedDropdown';
export default function Panel(props) {
    return (
    <ButtonGroup className='panel--buttongroup'>
       <GenerateMazeDropdown/>
        <ChooseAlgorithmDropdown/>
        <SelectSpeedDropdown/>
        <Button color="primary">
            Start
        </Button>
</ButtonGroup>
  );
};