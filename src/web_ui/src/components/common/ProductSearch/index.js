import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  root: {
    backgroundColor: theme.palette.background.default,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));


export default function ProductSearch() {
  const classes = useStyles();

  return (
    <div className={classes.heroButtons}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Paper component="form" className={classes.root}>
            <InputBase
              name="produce_search_main"
              className={classes.input}
              placeholder="Search vegetables, fertilizers, farm tools ..."
              inputProps={{ 'aria-label': 'search for produce' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              id="category"
              value={10}
              label="Category"
            >
              <MenuItem value="">
                <em>Farms</em>
              </MenuItem>
              <MenuItem value={10}>Nami's Farm</MenuItem>
              <MenuItem value={20}>Zoro's Farm</MenuItem>
              <MenuItem value={30}>Luffy's Farm</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              id="category"
              value={10}
              label="Category"
            >
              <MenuItem value="">
                <em>Farmer</em>
              </MenuItem>
              <MenuItem value={10}>Farmer Ussop</MenuItem>
              <MenuItem value={20}>Farmer Frankie</MenuItem>
              <MenuItem value={30}>Farmer Jimbei</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              id="category"
              value={10}
              label="Category"
            >
              <MenuItem value="">
                <em>Categories</em>
              </MenuItem>
              <MenuItem value={10}>vegetables</MenuItem>
              <MenuItem value={20}>farm tools</MenuItem>
              <MenuItem value={30}>fertilizers</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            More Filters
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}