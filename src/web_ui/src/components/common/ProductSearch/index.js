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

const farmSearch = {
  type: "farms",
  label: "Farms",
  items: [
    { value: 10, text: "Nami's Farm" }, 
    { value: 100, text: "Zoro's Farm" }, 
    { value: 120, text: "Luffy's Farm"}
  ], 
};

const farmersSearch = {
  type: "farmers",
  label: "Farmers",
  items: [
    { value: 10, text: "Farmer Ussop" }, 
    { value: 100, text: "Farmer Frankie" }, 
    { value: 120, text: "Farmer Jimbei"}
  ], 
};

const categorySearch = {
  type: "category",
  label: "Category",
  items: [
    { value: 10, text: "vegetables" }, 
    { value: 100, text: "farm tools" }, 
    { value: 120, text: "Fertilizer"}
  ], 
};

export default function ProductSearch() {
  const classes = useStyles();
  const menuItems = [farmSearch, farmersSearch, categorySearch];

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
        {menuItems.map((item, index) => (
          <Grid item key={index}>
            <FormControl>
              <Select
                id={item.type}
                value={item.items[index].value}
                label={item.label}
              >
                <MenuItem value="">
                  <em>{item.label}</em>
                </MenuItem>
                {item.items.map((listItem, indx) => (
                  <MenuItem key={indx} value={listItem.value}>{listItem.text}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
        <Grid item>
          <Button variant="contained" color="primary">
            More Filters
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}