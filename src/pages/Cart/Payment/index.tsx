import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Totals from '../Totals';

function Payment() {
  const [paymentInfo, changeInfo] = useState({
    number: '',
    name: '',
    expiration: '',
    cvv: '',
  });

  const changeHandler = useCallback((e) => {
    const target = e.target as HTMLInputElement;
    changeInfo((info) => ({
      ...info,
      [target.name]: target.value,
    }));
  }, []);

  return (
    <div>
      <section className="cart-section-cols cart-section-gap cart-section-top">
        <header className="cart-section-header">
          <Typography variant="h4">Payment</Typography>
        </header>

        <div className="cart-form">
          <TextField
            fullWidth
            className="row"
            name="number"
            label="Card number"
            variant="outlined"
            value={paymentInfo.number}
            InputLabelProps={{ shrink: true }}
            onChange={changeHandler}
          />

          <TextField
            fullWidth
            className="row"
            name="name"
            label="Name on card"
            variant="outlined"
            value={paymentInfo.name}
            InputLabelProps={{ shrink: true }}
            onChange={changeHandler}
          />

          <TextField
            fullWidth
            name="expiration"
            label="Expiration date"
            variant="outlined"
            type="date"
            value={paymentInfo.expiration}
            InputLabelProps={{ shrink: true }}
            onChange={changeHandler}
          />

          <TextField
            fullWidth
            name="cvv"
            label="CVV"
            placeholder="3 digits on the back of your card"
            variant="outlined"
            value={paymentInfo.cvv}
            InputLabelProps={{ shrink: true }}
            onChange={changeHandler}
          />

          <footer className="cart-section-actions row">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/cart/success"
            >
              Place order
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

export default Payment;
