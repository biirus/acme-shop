import './styles.css';
import { useCallback } from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'store';
import { changeInfo, InfoState } from 'store/slices/info';
import { getInfo } from 'store/selectors';
import Totals from 'pages/Cart/Totals';

function Shipping() {
  const dispatch = useAppDispatch();
  const info = useAppSelector(getInfo);

  const changeHandler = useCallback(
    (e) => {
      const target = e.target as HTMLInputElement;
      dispatch(
        changeInfo({
          name: target.name as keyof InfoState,
          value: target.value,
        })
      );
    },
    [dispatch]
  );

  return (
    <div>
      <section className="cart-section-totals cart-section-gap cart-section-top">
        <header className="cart-section-header">
          <Typography variant="h4">Shipping</Typography>
        </header>

        <div className="shipping-form">
          <TextField
            fullWidth
            className="row"
            name="name"
            label="Full name"
            variant="outlined"
            value={info.name}
            InputLabelProps={{ shrink: true }}
            onChange={changeHandler}
          />

          <TextField
            fullWidth
            className="row"
            name="address"
            label="Address"
            variant="outlined"
            value={info.address}
            InputLabelProps={{ shrink: true }}
            onChange={changeHandler}
          />

          <TextField
            fullWidth
            className="row"
            name="city"
            label="City"
            variant="outlined"
            value={info.city}
            InputLabelProps={{ shrink: true }}
            onChange={changeHandler}
          />

          <TextField
            fullWidth
            className="row"
            name="country"
            label="Country"
            variant="outlined"
            value={info.country}
            InputLabelProps={{ shrink: true }}
            onChange={changeHandler}
          />

          <TextField
            name="zip"
            label="Postal Code"
            variant="outlined"
            type="number"
            value={info.zip}
            InputLabelProps={{ shrink: true }}
            onChange={changeHandler}
          />

          <footer className="cart-section-actions row">
            <Button variant="contained" color="primary">
              Continue
            </Button>
          </footer>
        </div>

        <Paper>
          <Totals />
        </Paper>
      </section>
    </div>
  );
}

export default Shipping;
