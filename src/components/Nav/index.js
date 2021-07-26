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
    },
    header: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 75,
        padding: '0 20px 5px 10px'
    },
    list: {
        listStyleType: 'none',
        display: 'inline-flex',
        margin: 'auto',
        padding: '0',
    },
    item: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto',
        height: '100%',
        width: 'auto'
    },
    nav: {
        backgroundColor: 'green',
        minHeight: '5vh',
        maxHeight: '10vh',
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: 3

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
                    <ListItem className={classes.item} button onClick={() => setCurrentTab(text)} key={text}>
                        <ListItemIcon>{Icons[index]}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const left = 'top';

    return (
        <header className={classes.nav}>
            <div className={classes.header}>
                <Button onClick={toggleDrawer(left, true)}>NAV<ViewHeadlineIcon /> </Button>
                <p>BryantC0der</p>
            </div>
            <Drawer anchor={left} open={state[left]} onClose={toggleDrawer(left, false)}>
                {list(left)}
            </Drawer>
        </header>

    );
}

export default Nav