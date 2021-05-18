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
  TableFooter,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'store';
import {
  getCartItems,
  getProductsMap,
  getProductsTotal,
} from 'store/selectors';
import { Delete } from '@material-ui/icons';
import { changeAmount, remove } from 'store/slices/cart';

function Overview() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCartItems);
  const productsMap = useAppSelector(getProductsMap);
  const productsTotal = useAppSelector(getProductsTotal);

  const isCartEmpty = Object.entries(cartItems).length === 0;

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
        <TableFooter>
          <TableRow>
            <TableCell align="right" colSpan={5}>
              <Typography variant="h5" color="textPrimary">
                Total: ${productsTotal}
              </Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Overview;
