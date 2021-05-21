import f from 'faker';

export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

const MAX_PRODUCTS = 12;

export const getProducts = async () => {
  const images = [
    'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/960w/products/115/489/Hat-front-black__72990.1603748583.png',
    'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/960w/products/116/512/Men-Jacket-Front-Black__15466.1603283963.png',
    'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/960w/products/118/509/Surgical-Mask-Front-Black__75855.1603756822.png',
  ];

  const products = Array.from({ length: MAX_PRODUCTS }).map<Product>(() => ({
    id: f.datatype.uuid(),
    name: f.commerce.productName(),
    price: Number(f.commerce.price()),
    image: f.random.arrayElement(images),
  }));

  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 300);
  });
};
