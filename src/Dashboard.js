import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: '50px',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Dashboard(props) {
  const { classes } = props
  
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
      </Paper>
    </div>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);