import './styles.css';

import { CircularProgress, Typography } from '@material-ui/core';
import ProductItem from 'pages/ProductList/ProductItem';
import { useAppSelector } from 'store';
import { getProductsMap, getProductsUI } from 'store/selectors';

function ProductList() {
  const products = useAppSelector(getProductsMap);
  const ui = useAppSelector(getProductsUI);

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
