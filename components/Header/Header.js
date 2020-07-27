import styles from './Header.module.scss';

const Header = () => (
  <section className={styles.header}>
    <h1 className={styles.title}>Appliance Packages</h1>
    <p className={styles.objective}>Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators.</p>
  </section>
);

export default Header;