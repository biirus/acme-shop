import './styles.css';
import { Switch, Route, useRouteMatch, Redirect, Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import Progress from 'pages/Cart/Progress';
import Overview from 'pages/Cart/Overview';
import Shipping from 'pages/Cart/Shipping';
import Payment from 'pages/Cart/Payment';

function Cart() {
  const match = useRouteMatch();
  return (
    <div className="cart">
      <Switch>
        <Route path={`${match.url}/overview`}>
          <Progress />
          <Overview />
        </Route>
        <Route path={`${match.url}/shipping`}>
          <Progress />
          <Shipping />
        </Route>
        <Route path={`${match.url}/payment`}>
          <Progress />
          <Payment />
        </Route>
        <Route path={`${match.url}/success`}>
          <Progress />
          <div className="empty-state">
            <Typography variant="h3" gutterBottom>
              Congratulations!
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/">
              Back to products
            </Button>
          </div>
        </Route>

        <Redirect to={`${match.url}/overview`} />
      </Switch>
    </div>
  );
}

export default Cart;
