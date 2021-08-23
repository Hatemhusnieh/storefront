import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import './products.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products(props) {
  const classes = useStyles();

  return (
    <div className="products">
      {props.products.map((prod) => {
        return (
          <div className="cards">
            <Card className={classes.root} key={prod.name}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  style={{ 'background-size': 'cover', 'background-position': 'center' }}
                  image={prod.img}
                  title={prod.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {prod.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {prod.inStock} left
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
              <Button size="small" color="primary">
              Share
              </Button>
              <Button size="small" color="primary">
              Learn More
              </Button>
            </CardActions> */}
            </Card>
          </div>
        );
      })}
    </div>
  );
}

const stateToProps = (state) => {
  return state;
};

export default connect(stateToProps)(Products);
