import './styles.css';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Delete } from '@material-ui/icons';
import { useAppDispatch, useAppSelector } from 'store';
import { getCartItems, getProductsMap, getProductsUI } from 'store/selectors';
import { changeAmount, remove } from 'store/slices/cart';
import Totals from 'pages/Cart/Totals';

function Overview() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCartItems);
  const productsMap = useAppSelector(getProductsMap);
  const ui = useAppSelector(getProductsUI);

  const isLoading = ui.status === 'pending';
  const isCartEmpty = Object.entries(cartItems).length === 0;

  if (isLoading) {
    return (
      <div className="empty-state">
        <CircularProgress className="spinner" />
        <Typography>Getting products...</Typography>
      </div>
    );
  }

  if (isCartEmpty) {
    return (
      <div className="empty-state">
        <Typography variant="h3" color="textSecondary">
          Cart is empty
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <section>
        <header className="cart-section-header">
          <Typography variant="h4">Overview</Typography>
        </header>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell></TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(cartItems).map(([id, count]) => {
              const item = productsMap[id];

              if (!item) {
                return null;
              }

              return (
                <TableRow key={id}>
                  <TableCell width="15%">
                    <img
                      className="table-item-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography>{item.name}</Typography>
                  </TableCell>
                  <TableCell align="right" width="10%">
                    ${item.price}
                  </TableCell>
                  <TableCell align="right" width="15%">
                    <TextField
                      size="small"
                      variant="outlined"
                      value={count}
                      type="number"
                      inputProps={{ min: 0 }}
                      onChange={(e) =>
                        dispatch(
                          changeAmount({
                            id,
                            amount: parseInt(e.target.value),
                          })
                        )
                      }
                    />
                  </TableCell>
                  <TableCell align="right" width="15%">
                    <Typography>
                      <strong>${count * item.price}</strong>
                    </Typography>
                  </TableCell>
                  <TableCell align="right" width="5%">
                    <IconButton onClick={() => dispatch(remove(id))}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>

      <section className="cart-section-totals">
        <Totals className="cart-totals" />
      </section>

      <section className="cart-section-actions">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/cart/shipping"
        >
          Check out
        </Button>
      </section>
    </div>
  );
}

export default Overview;
