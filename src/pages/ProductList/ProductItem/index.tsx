import './styles.css';
import { memo } from 'react';
import { Product } from 'api/products';
import { useAppDispatch, useAppSelector } from 'store';
import { getProductsMap } from 'store/selectors';
import { increment } from 'store/slices/cart';
import { Typography, Button } from '@material-ui/core';

type ProductProps = {
  itemID: Product['id'];
};

function ProductItem(props: ProductProps) {
  const dispatch = useAppDispatch();
  const item = useAppSelector((state) => getProductsMap(state)[props.itemID]);

  return (
    <div className="product">
      <div className="cover-placeholder">
        <img className="cover" src={item.image} alt={item.name} />

        <Button
          className="cta"
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment(item.id))}
        >
          Add to cart
        </Button>
      </div>

      <footer className="description">
        <Typography variant="h6" className="label">
          {item.name}
        </Typography>

        <Typography variant="h5" className="price">
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="span"
          >
            $
          </Typography>
          {item.price}
        </Typography>

        <Typography variant="caption" color="textSecondary" className="label">
          {item.id}
        </Typography>
      </footer>
    </div>
  );
}

export default memo(ProductItem);
