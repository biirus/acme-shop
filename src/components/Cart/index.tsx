import { memo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Progress from 'components/Progress';

function Cart() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/cart" />

        <Route path="/cart">
          <Progress />
          <h1>Cart</h1>
        </Route>

        <Route path="/customer">
          <Progress />
          <h1>Customer</h1>
        </Route>
        <Route path="/shipping">
          <Progress />
          <h1>Shipping</h1>
        </Route>
        <Route path="/billing">
          <Progress />
          <h1>Billing</h1>
        </Route>
        <Route path="/payment">
          <Progress />
          <h1>Payment</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default memo(Cart);
