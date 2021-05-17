import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { getProductsMap, getProductsUI, getTotal } from 'store/selectors';
import { fetchProducs } from 'store/slices/products';
import ProductItem from 'components/ProductItem';

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProductsMap);
  const ui = useAppSelector(getProductsUI);
  const total = useAppSelector(getTotal);

  useEffect(() => {
    dispatch(fetchProducs());
  }, [dispatch]);

  console.log(total);

  return (
    <div className="App">
      {ui.status === 'pending' ? (
        <h1>Loading...</h1>
      ) : (
        Object.keys(products).map((id) => <ProductItem key={id} itemID={id} />)
      )}
    </div>
  );
}

export default App;
