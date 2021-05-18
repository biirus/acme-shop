import './styles.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useAppSelector } from 'store';
import { getCartItems } from 'store/selectors';

function CartLink() {
  const cartCount = useAppSelector(
    (state) => Object.keys(getCartItems(state)).length || 0
  );

  return (
    <span className="cart-link">
      <ShoppingCartIcon /> Cart ({cartCount})
    </span>
  );
}

export default CartLink;
