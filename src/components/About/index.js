import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
        padding: '15px 0 75px 0',
        minWidth: 375,
        maxWidth: 700
    },
    image: {
        minWidth: 150,
        maxWidth: 300,
        // float: 'left',
        padding: '10px 5px'
    },
    innerFlex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerFlexImg: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    p: {
        maxWidth: 350
    }
});



function About({ aboutInfo }) {
    const { image, body, hobbies } = aboutInfo;
    const classes = useStyles();


    return (
        <div className={classes.container}>
            <div className={classes.innerFlex}>
                <img src={image[0]} alt='wife' className={classes.image} />
                <p className={classes.p}>{body}</p>
            </div>
            
            <div>
                <h2>Things I like:</h2>
                <div className={classes.innerFlexImg}>
                    {hobbies.map(hobby => (
                        <img key={hobby} src={hobby} alt='hobby' className={classes.image} />
                    ))}
                </div>
            </div>
        </div>

    )
}


export default About