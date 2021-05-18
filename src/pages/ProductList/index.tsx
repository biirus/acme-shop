import './styles.css';
import { CircularProgress, Typography } from '@material-ui/core';
import ProductItem from 'components/ProductItem';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { getProductsMap, getProductsUI } from 'store/selectors';
import { fetchProducs } from 'store/slices/products';

function ProductList() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProductsMap);
  const ui = useAppSelector(getProductsUI);

  useEffect(() => {
    console.log('fetch');

    dispatch(fetchProducs());
  }, [dispatch]);

  return (
    <div className="product-list">
      {ui.status === 'pending' ? (
        <div className="loading">
          <CircularProgress className="spinner" />
          <Typography>Getting products...</Typography>
        </div>
      ) : (
        <div className="list">
          {Object.keys(products).map((id) => (
            <ProductItem key={id} itemID={id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
