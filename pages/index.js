import Head from 'next/head';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'redux/store';

// https://www.ajmadison.com/product3.0/packages.index.json.php?sku=RF28R7351SR
function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main
  - Filter navigation
    - Select Appliances ( dropdown with checkbox ) - should filter packages where the any of the items -> ~product_type equals selected category  
      - Values: Cooktop, Dishwasher, Microwave, Range, Range Hood, Refrigerator, Wall Oven  
    - Sort By ( dropdown ) - should contain two options , highest price and lowest price
    - Delivery Method ( toggle ) - show filter by items where 'is_quick_ship` is true
  - Section
    - Appliance Package
      - Image (final URL will be "https://assets.ajmadison.com/[image->folder]/[image->filename].jpg)
      - Description ( [brand] [series] [description] ) (you might want to concatentate after three lines)
      - Quick Ship ( is_quick_ship (icon in repo) )
      - Price ( [prices->final] )
      - List Price  ( [prices->list_price] )
      - Discount ( [prices->list_price] - [prices->final] )
      - View Package Button ( "https://ajmadison.com[url] ) */}

      <Provider store={store}><App /></Provider>
    </div>
  )
}

export default Home;