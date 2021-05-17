import { memo } from 'react';
import { Product } from 'api/products';
import { useAppDispatch, useAppSelector } from 'store';
import { getCartItems, getProductsMap } from 'store/selectors';
import { increment } from 'store/slices/cart';

type ProductProps = {
  itemID: Product['id'];
};

function ProductItem(props: ProductProps) {
  const dispatch = useAppDispatch();
  const productsMap = useAppSelector(getProductsMap);
  const count = useAppSelector((state) => getCartItems(state)[props.itemID]);
  const item = productsMap[props.itemID];

  console.log('render p', item.name);

  return (
    <div>
      <img
        src={item.image}
        alt={item.name}
        onClick={() => dispatch(increment(item.id))}
      />
      <h3>
        {item.name} {count}
      </h3>
    </div>
  );
}

export default memo(ProductItem);
