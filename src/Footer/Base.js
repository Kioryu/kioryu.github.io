import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));

export default function FooterBase() {
    const classes = useStyles();
    return (
        <React.Fragment>

            <footer className={classes.footer}>
                <Container maxWidth={"lg"}>
                    <Typography variant={"h6"} align={"center"} gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant={"subtitle1"} align={"center"} color={"textSecondary"} component={"p"}>
                        Something here to give the footer a purpose!
                    </Typography>
                </Container>
            </footer>

        </React.Fragment>
    )
}