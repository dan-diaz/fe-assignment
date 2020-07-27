import styles from './Fields.module.scss';

const FieldWrapper = ({ labelText, children}) => (
  <div className={styles.fieldWrapper}>
    <p className={styles.fieldWrapper__label}>{labelText}</p>
    {children}
  </div>
);

export default FieldWrapper;