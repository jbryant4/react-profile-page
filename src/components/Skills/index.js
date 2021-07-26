import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '100px 0',
    },
    list: {
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 'auto',
        padding: '0' ,
        
    },
    item: {
        margin: 'auto',
        height: 'auto',
        width: '50%',
        padding: '0 5px'
    },
    skill: {
        border: '2px solid red',
        height: 200,
        width: 400
    },
    title: {
        margin:'5px auto 5px 10px'
    }
});

function Skills({ skills }) {
    const classes = useStyles();

    return (
        <div className={classes.flex}>
            {skills.map(skill => (
                <div className={classes.skill}>
                    <h3 className={classes.title}>{skill.category}</h3>
                    <List className={classes.list}>
                        {skill.skills.map(text => (
                            <ListItem className={classes.item} key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            ))}
        </div>
    )
}


export default Skills