import React from 'react';
import {styles} from "../../Resources/Styles/Simte";
import {withStyles} from "@material-ui/core/styles/index";
import ToolbarBase from '../Toolbar/Base'
import {step} from '../../Resources/Contents/Simte'
import StudyPanel from './StudyPanel'

export default withStyles(styles)(function SimteBase(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const {classes} = props;
    return (
        <ToolbarBase>
            <StudyPanel classes={classes} items={step} expanded={expanded} handleChange={handleChange}/>
        </ToolbarBase>
    );
})