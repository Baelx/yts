import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
});

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="Menu">
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search your Youtube Likes"
        inputProps={{ 'aria-label': 'Search your Youtube Likes' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <IconButton color="primary" className={classes.iconButton}>
      </IconButton>
    </Paper>
  );
}
