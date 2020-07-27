import cn from 'classnames';
import styles from './Fields.module.scss';

const Checkbox = ({ disabled, input, labelText  }) => {
  return (
    <div className={styles.checkboxWrapper}>
      <input type="checkbox"
          className={styles.checkboxInput}
          checked={!!input.value}
          {...input}
          id={input.name}
          disabled={disabled} />
      <label className={styles.checkboxLabel} htmlFor={input.name}>{labelText}</label>
    </div>
  );
};

export default Checkbox;
