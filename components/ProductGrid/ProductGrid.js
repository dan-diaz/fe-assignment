import { useSelector } from 'react-redux';
import ProductTile from 'components/ProductTile';
import { productFilterSort } from 'redux/selectors';
import styles from './ProductGrid.module.scss';

const ProductGrid = () => {
  const filteredData = useSelector(productFilterSort);

  return (
    <div className={styles.productGrid}>
      {filteredData && filteredData.map((product) => (
        <ProductTile key={product.sku} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
