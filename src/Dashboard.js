import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: '50px',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '2px solid grey'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
  },
  chatBox: {
    width: '85%'
  },
  button: {
    margin: theme.spacing(1),
    width: '15%'
  },
});

function Dashboard(props) {
  const { classes } = props;
  
  const [textValue, changeTextValue] = React.useState('');

  return (
    <div>
      <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h5">
          React Socket Chat
        </Typography>
        <Typography variant="h5" component="h5">
          Topic Placeholder
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {
                ['topic'].map(topic => (
                  <ListItem key={topic} button>
                    <ListItemText primary={topic} />
                  </ListItem>
                ))
              }
            </List>
          </div>
          <div className={classes.chatWindow}>
            {
              [{from: 'user', msg: 'hello'}].map((chat, i) => (
                <div className={classes.flex} key={i}>
                  <Chip label={chat.from} avatar={<Avatar src="/static/images/avatar/1.jpg" />} />
                  <Typography variant='p'>{chat.msg}</Typography>
                </div>
              ))
            }
          </div>
        </div>
        <div className={classes.flex}>
            <TextField 
              id="standard-basic" 
              label="Say Something..." 
              className={classes.chatBox} 
              value={textValue}
              onChange={e => changeTextValue(e.target.value)}
              />
            <Button variant="contained" color="primary">
              Send
            </Button>
        </div>
      </Paper>
    </div>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);