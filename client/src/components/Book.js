import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export const Book = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery('(min-width:675px)');
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        {matches ? 
            <CardMedia className={classes.cover} image={props.image} title={props.title} style={{width: "250px", height: "auto"}} /> :
             ""
        }
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <div className="row">
                    <div className="col-lg-9 col-sm-6">
                        <Typography component="h5" variant="h5">
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {props.authors}
                        </Typography>
                    </div>
                    <div className="col-lg-3 col-sm-6" style={{margin: "2.5% 0;"}}>
                        <ButtonGroup disableElevation variant="contained" color="primary" infoLink={props.infoLink}>
                            <Button href={props.infoLink} target="_blank">View</Button>
                            {props.heading == "Search Results" ? 
                               <Button onClick={handleClickAdd}>ADD</Button> : 
                               <Button onClick={handleClickRemove}>REMOVE</Button>
                            }
                        </ButtonGroup>
                    </div>
                </div>
                <div className={classes.details} style={{maxHeight: "225px", textAlign: "left"}}>
                    <p style={{margin: "10px 0", maxHeight: "150px", overflow: "auto"}}>{props.description}</p>
                </div>
                {matches ? 
                    "" :
                    <>
                        <i className="far fa-image" type="button" style={{fontSize: "32px", cursor: "pointer"}} onClick={handleOpen}></i>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                            <div className={classes.paper} style={{minWidth: "50%", height: "auto"}}>
                                <img src={props.image} style={{width: "100%", height: "auto"}}></img>
                            </div>
                            </Fade>
                        </Modal>
                    </>
                }
            </CardContent>
        </div>
    </Card>
  );
}