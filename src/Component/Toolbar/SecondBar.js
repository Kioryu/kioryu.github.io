import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../Styles/Toolbar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'

const sections = [
    'Collections',
    'Two',
    'Three',
    'Four',
    'Email',
    // 'Six',
    // 'Seven',
    // 'Eight',
    // 'Nine',
    // 'Travel',
];

export default withStyles(styles)(function SecondBar(props) {
    const {classes} = props;
    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {sections.map(section => (
                <Link
                    color="inherit"
                    noWrap
                    key={section}
                    variant="body2"
                    // href={section}
                    href={'#/'+section}
                    className={classes.toolbarLink}
                >
                    {section}
                </Link>
            ))}
        </Toolbar>
    )
})