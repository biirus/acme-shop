import './styles.css';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Progress from 'pages/Cart/Progress';
import Overview from './Overview';

function Cart() {
  const match = useRouteMatch();
  return (
    <div className="cart">
      <Switch>
        <Route path={`${match.url}/overview`}>
          <Progress />
          <Overview />
        </Route>
        <Route path={`${match.url}/customer`}>
          <Progress />
          <h1>Customer</h1>
        </Route>
        <Route path={`${match.url}/shipping`}>
          <Progress />
          <h1>Shipping</h1>
        </Route>
        <Route path={`${match.url}/billing`}>
          <Progress />
          <h1>Billing</h1>
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
