import './styles.css';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useAppSelector } from 'store';
import { getCartItems } from 'store/selectors';

function CartLink() {
  const cartCount = useAppSelector(
    (state) => Object.keys(getCartItems(state)).length || 0
  );

  return (
    <Button className="cart-link" startIcon={<ShoppingCartIcon />}>
      Cart ({cartCount})
    </Button>
  );
}

export default CartLink;
