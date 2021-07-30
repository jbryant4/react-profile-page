import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import AppsIcon from '@material-ui/icons/Apps';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
        color: '#dbb95f'
    },
    nav: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0',
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: 3,
        backgroundColor: '#422e13',
        
    },
    list: {
        listStyleType: 'none',
        display: 'inline-flex',
        margin: 'auto',
        padding: '0',
        color: '#878532'
    },
    item: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto',
        height: '100%',
        width: 'auto',
        
    },
    p: {
        padding: '0 10px',
        color: '#dbb95f'
    },
    icon: {
        color: '#dbb95f'
    },
    iconClicked: {
        color: '#537636'
    },
    itemClick: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto',
        height: '100%',
        width: 'auto',
        color: '#537636'
    }
});

// Icons are in an array that lines up with the tabs array. Tabs is in APP.js 
const Icons = [<PersonIcon />, <AppsIcon />, <CodeIcon />, <MailIcon />];

function Nav({ tabs, setCurrentTab, currentTab }) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={classes.flex}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.list}>
                {tabs.map((text, index) => (
                    <ListItem className={currentTab === text ? classes.itemClick : classes.item} button onClick={() => setCurrentTab(text)} key={text}>
                        <ListItemIcon className={currentTab === text ? classes.iconClicked : classes.icon}>{Icons[index]}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const left = 'top';

    return (
        <>
            <div className={classes.nav}>
                <Button  className={classes.p} onClick={toggleDrawer(left, true)}>NAV<ViewHeadlineIcon  /> </Button>
                <p className={classes.p}>BryantC0der</p>
            </div>
            <Drawer anchor={left} open={state[left]} onClose={toggleDrawer(left, false)}>
                {list(left)}
            </Drawer>
        </>

    );
}

export default Nav