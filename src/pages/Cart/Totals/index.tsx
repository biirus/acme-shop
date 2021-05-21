import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TextField,
  Slider,
} from '@material-ui/core';
import { HTMLAttributes, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import {
  getDiscount,
  getDiscountValue,
  getDonation,
  getDonationValue,
  getProductsTotal,
  getTotal,
} from 'store/selectors';
import { applyDiscount, changeDonation } from 'store/slices/cart';
import { clamp } from 'utils/clamp';

function Totals(props: HTMLAttributes<HTMLTableElement>) {
  const dispatch = useAppDispatch();
  const productsTotal = useAppSelector(getProductsTotal);
  const total = useAppSelector(getTotal);
  const donation = useAppSelector(getDonation);
  const donationValue = useAppSelector(getDonationValue);
  const discount = useAppSelector(getDiscount);
  const discountValue = useAppSelector(getDiscountValue);

  const discountHandler = useCallback(
    (e) => {
      let value = parseFloat(e.target.value);

      if (isNaN(value)) {
        value = 0;
      }

      value = clamp(0, 100, value);
      dispatch(applyDiscount(value));
    },
    [dispatch]
  );

  return (
    <Table className={props.className}>
      <TableBody>
        <TableRow>
          <TableCell colSpan={2}>Subtotal</TableCell>
          <TableCell align="right">${productsTotal}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell width="30%">Donation (%)</TableCell>
          <TableCell width="50%">
            <Slider
              min={0}
              max={20}
              value={donation}
              valueLabelFormat={(v) => `${v}%`}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                dispatch(changeDonation(value as number));
              }}
            />
          </TableCell>
          <TableCell width="20%" align="right">
            ${donationValue}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Discount (%)</TableCell>
          <TableCell>
            <TextField
              fullWidth
              type="number"
              size="small"
              variant="outlined"
              value={discount}
              inputProps={{ min: 0, max: 100 }}
              onChange={discountHandler}
            />
          </TableCell>
          <TableCell align="right">${discountValue}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>Grandtotal</TableCell>
          <TableCell align="right">
            <Typography variant="h6">
              <strong>${total.toFixed(2)}</strong>
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default Totals;
