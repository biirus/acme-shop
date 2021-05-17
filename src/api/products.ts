export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

const hat = {
  id: '5F6D806277FEA_11189',
  name: 'Black Hat',
  price: 79,
  image:
    'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/960w/products/115/489/Hat-front-black__72990.1603748583.png',
};

const jacket = {
  id: '5F6D80A544056_9908',
  name: 'Black Jacket',
  price: 399,
  image:
    'https://cdn11.bigcommerce.com/s-qfzerv205w/images/stencil/960w/products/116/512/Men-Jacket-Front-Black__15466.1603283963.png',
};

export const getProducts = async () => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve([hat, jacket]);
    }, 300);
  });
};
