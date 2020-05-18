import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Timer, LocalOffer } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { List, ListItem } from '@material-ui/core';
import ProductSearch from '../common/ProductSearch';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  flex: {
    flex: 1
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0)
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: 0
  },
  cardList: {
    padding: 0
  },
  space: {
    paddingRight: theme.spacing(1)
  },
  spaceTop: {
    paddingTop: theme.spacing(1)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <Layout>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <ProductSearch />
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Vegetables"
                />
                <CardContent className={classes.cardContent}>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Typography color="textSecondary" gutterBottom component="h5">
                        VEGETABLES
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <List className={classes.cardList}>
                        <ListItem className={classes.cardList} disableGutters>
                          <Timer className={classes.space} />
                          <Typography>2 hours ago</Typography>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.spaceTop}>
                    <Grid item xs={2}>
                      <LocalOffer fontSize="large" />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography component="h5">Dodo</Typography>
                      Fastfarm
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button size="small" className={classes.flex}>
                    VIEW PRODUCT
                  </Button>
                  <Button size="small" className={classes.flex}>
                    VIEW FARM
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
