import './App.css';
import { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Typography, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ProductList from 'pages/ProductList';
import CartLink from 'components/CartLink';
import Cart from 'pages/Cart';

import { fetchProducs } from 'store/slices/products';
import { useAppDispatch } from 'store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('fetch');

    dispatch(fetchProducs());
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app-header">
        <Typography variant="h5">
          <Link to="/" className="app-header-link">
            Acme Production
          </Link>
        </Typography>

        <TextField
          size="small"
          placeholder="Search..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <div>
          <Typography>
            <Link to="/cart" className="app-header-link">
              <CartLink />
            </Link>
          </Typography>
        </div>
      </header>

      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>

      <footer>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ea quo
        aliquid, excepturi rem beatae? Exercitationem illo saepe, dolor ad esse
        amet autem sed placeat quae non dolorum necessitatibus incidunt!
      </footer>
    </div>
  );
}

export default App;
