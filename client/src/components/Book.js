import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: 'flex',
        marginBottom: "10px",
        textAlign: "center"
    },
    details: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        width: "100%",
        flex: '1 0 auto',
        paddingBottom: "0",
    },
    cover: {
        width: 151,
    },
    details: {
        width: "100%",
        display: 'flex',
        alignItems: 'center',
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export const Book = props => {
  const classes = useStyles();
  const theme = useTheme();

  const handleClickAdd = event => {
    event.preventDefault();
    props.addBook({
        id: props.id,
        title: props.title,
        authors: props.authors,
        description: props.description,
        image: props.image,
        infoLink: props.infoLink,
    })
  }

  const handleClickRemove = event => {
    event.preventDefault();
    props.removeBook(props.id)
  }
  
  return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.cover}
            image={props.image}
            title={props.title}
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <div className="row">
                    <div className="col-9">
                        <Typography component="h5" variant="h5">
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {props.authors}
                        </Typography>
                    </div>
                    <div className="col-3">
                        <ButtonGroup disableElevation variant="contained" color="primary" infoLink={props.infoLink}>
                            <Button href={props.infoLink} target="_blank">View</Button>
                            {props.heading == "Search Results" ? 
                               <Button onClick={handleClickAdd}>ADD</Button> : 
                               <Button onClick={handleClickRemove}>REMOVE</Button>
                            }
                        </ButtonGroup>
                    </div>
                </div>
                <div className={classes.details}>
                    <p>{props.description}</p>
                </div>
            </CardContent>
        </div>
    </Card>
  );
}