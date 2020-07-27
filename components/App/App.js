import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import Filter from 'components/Filter';
import ProductGrid from 'components/ProductGrid';
import { setProductData } from 'redux/reducers/filterReducer';

/**
 * App
 * houses the main view
 * manages some general application state
 */
const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);

    // fetch and store data
    fetch('https://demo3211013.mockable.io/ajmad')
    .then(res => res.json())
    .then(data => dispatch(setProductData(data)));

    setIsLoading(false);
  }, []);

  return (
    <main>
      <Header />
      <Filter isLoading={isLoading} />
      <ProductGrid />
    </main>
  );
};

export default App;
