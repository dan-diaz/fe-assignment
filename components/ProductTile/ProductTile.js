import Button from 'components/Button';
import styles from './ProductTile.module.scss';
import { getImageSrc } from 'utils/images';

const quickShipImageSrc = getImageSrc('quickship-pdp.png');
const imageUrl = ({filename, folder}) => `https://assets.ajmadison.com/${folder}/${filename}.jpeg`;
const priceDisplay = (price) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

const ProductTile = (props) => {
  const {
    brand,
    description,
    image,
    is_quick_ship,
    series,
    url
  } = props;
  
  const { final, list_price } = props.prices;
  const imageSrc = imageUrl(image);

  let title = `${brand}`;
  title += series ? ` ${series}` : '';

  const finalFormatted = priceDisplay(final);
  const listPriceFormatted = priceDisplay(list_price);
  const savingsFormatted = priceDisplay(list_price - final);
  const href = `https://ajmadison.com/${url}`;

  return (
    <div className={styles.productTile}>

      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageSrc} alt={title} />
      </div>
      
      <div className={styles.details}>
        <p className={styles.finalPrice}>{finalFormatted}</p>
        
        <div className={styles.savings}>
          <span className={styles.savingsPrice}>Save {savingsFormatted}</span>
          <span className={styles.listPrice}>{listPriceFormatted}</span>
        </div>

        <p className={styles.description}>
          <span className={styles.title}>{title} </span>
          {description}
        </p>
        
        <div className={styles.quickShipWrapper}>
          {is_quick_ship && <img className={styles.quickShip} src={quickShipImageSrc} />}
        </div>

        <Button className={styles.button} text='View Package' href={href} />
      </div>
      
    </div>
  );
}

export default ProductTile;

// {
//   "sku": "SARERADWMW12587",
//   "brand": "Samsung",
//   "series": "",
//   "description": "4 Piece Kitchen Appliances Package with French Door Refrigerator, Electric Range, Dishwasher and Over the Range Microwave in Stainless Steel",
//   "prices": {
//   "list_price": 5266,
//   "final": 4592
//   },
//   "rebates": {
//   "instant_amount": 0,
//   "mailin_amount": 100
//   },
//   "is_quick_ship": false,
//   "tag": "best price freestanding electric range",
//   "popularity": null,
//   "url": "/cgi-bin/ajmadison/SARERADWMW12587.html",
//   "image": {
//   "filename": "sareradwmw125875dc46dfcc42f73.38059073_56d2d",
//   "label": "",
//   "folder": "ajmadison/images/large_no_watermark",
//   "extension": "jpg",
//   "original_filename": "sareradwmw125875dc46dfcc42f73.38059073_56d2d",
//   "original_path": "",
//   "fully_qualified_url": "",
//   "width": null,
//   "height": null,
//   "alt": null,
//   "url": null
//   },