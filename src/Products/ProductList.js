import React from 'react';
// import Button from '../Button/Button';

// Create product row
const Product = () => (
  <tr>
    <td>A beer row</td>
  </tr>
);

//Remember to make use of the products from props
const ProductList = (props) => {
  const productList = props.products
    .filter(filter => true)
    .map((product, index) => <Product key={index} />);

  return (
    <table>
      <thead>
        <tr>
          <th>What is this?</th>
        </tr>
      </thead>
      <tbody>
        {productList}
      </tbody>
    </table>
  );
}

export default ProductList;
