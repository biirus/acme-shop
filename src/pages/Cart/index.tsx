import './styles.css';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Progress from 'pages/Cart/Progress';
import Overview from 'pages/Cart/Overview';
import Shipping from 'pages/Cart/Shipping';

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
          <h1>Payment</h1>
        </Route>

        <Redirect to={`${match.url}/overview`} />
      </Switch>
    </div>
  );
}

export default Cart;
