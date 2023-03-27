const { Product } = require('../models');

const productData = [
  {
    product_name: 'Smartphone',
    price: 699.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'T-shirt',
    price: 12.99,
    stock: 40,
    category_id: 2,
  },
  {
    product_name: 'Action Figure',
    price: 14.99,
    stock: 32,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
