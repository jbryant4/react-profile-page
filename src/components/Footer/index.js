import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//icons 
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

// style for the footer section
const useStyles = makeStyles({
    footer: {
        backgroundColor: 'green',
        position: 'fixed',
        bottom: '0',
        width: '100%', 
        height: '75px'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        height: '100%'
    },
    list: {
        listStyleType: 'none',
        display: 'inline-flex',
        margin: 'auto',
        padding: '0'  
    },
    item: {
        margin: 'auto 20px',
        height: '100%'
    }
});


function Footer({ contact }) {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <div className={classes.flex}>
                    <ul className={classes.list}>
                        {/* this is for later */}
                        <li className={classes.item}><a href={contact.resume} target="blank" ><DescriptionIcon fontSize='large'/></a></li>
                        <li className={classes.item}><a href={contact.github} target="blank" ><GitHubIcon fontSize='large'/></a></li>
                        <li className={classes.item}><a href={contact.linkedIn} target="blank" ><LinkedInIcon fontSize='large'/></a></li>
                    </ul>
            </div>
        </footer>
    )
}


export default Footer