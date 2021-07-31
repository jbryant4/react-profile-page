import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 0',
        maxWidth: 850,
    },
    list: {
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 'auto',
        padding: '0',
        textAlign: 'center',
    },
    item: {
        margin: 'auto',
        height: 'auto',
        width: '50%',
        textAlign: 'center',
    },
    root: {
        minWidth: 275,
        height: 200,
        width: 350,
        textAlign: 'center',
        margin: 5,
        backgroundColor: '#537636',
        boxShadow: '2px 4px #878532',
        color: '#dbb95f'
    
    },
    title: {
        borderBottom: '1px solid #7f5f16',
        marginBottom: 20,
        fontWeight: 'bolder',
        fontSize: 'larger'
    },
    pos: {
        marginBottom: 12,
    },
});

function Skills({ skills }) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {skills.map(skill => (
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} >
                            {skill.category}
                        </Typography>
                        <div className={classes.list}>
                        {skill.skills.map(text => (
                            <Typography  className={classes.item} variant="body2" component="p">
                                {text}
                            </Typography>
                        ))}
                        </div>
                    </CardContent>

                </Card>
            ))}
        </div>
    )
}


export default Skills