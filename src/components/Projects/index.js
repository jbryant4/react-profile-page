import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 350,
    },
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',

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
});

function Projects({ projects, currentProject, setCurrentProject }) {
    const classes = useStyles();

    const projectIndex = () => {
        return projects.findIndex(project => project === currentProject)
    }


    return (
        <div className={classes.flex}>

            <div>
                <button onClick={() => setCurrentProject(projects[projectIndex() - 1] || currentProject)}>Previous Project</button>
                <button onClick={() => setCurrentProject(projects[projectIndex() + 1] || currentProject)}>Next Project</button>
            </div>
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={currentProject.image}
                        title={currentProject.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {currentProject.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {currentProject.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open( currentProject.repo, '_blank')}>
                        Repo
                    </Button>
                    <Button size="small" color="primary" onClick={() =>  window.open( currentProject.app, '_blank')}>
                        App
                    </Button>
                </CardActions>
            </Card>
            <div>
                <h2>Usage</h2>
                <FontAwesomeIcon icon={['fab', 'html5']} />
            </div>
        </div >
    )
}


export default Projects