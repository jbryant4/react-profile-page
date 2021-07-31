import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//icons 
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';

// style for the footer section
const useStyles = makeStyles({
    footer: {
        backgroundColor: '#422e13',
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
        height: '100%',
        color: '#dbb95f'
    }
});


function Footer({ contact }) {
    const classes = useStyles()
    
    return (
        <footer className={classes.footer}>
            <div className={classes.flex}>
                    <ul className={classes.list}>
                        {/* this is for later */}
                        <li><a href={contact.resume} target="blank" ><DescriptionIcon className={classes.item} fontSize='large'/></a></li>
                        <li><a href={contact.github} target="blank" ><GitHubIcon className={classes.item} fontSize='large'/></a></li>
                        <li><a href={contact.linkedIn} target="blank" ><LinkedInIcon className={classes.item} fontSize='large'/></a></li>
                        <li><a href={`mailto:${contact.email}`} target="blank" ><EmailIcon className={classes.item} fontSize='large'/></a></li>
                    </ul>
            </div>
        </footer>
    )
}


export default Footer