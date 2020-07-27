import cn from 'classnames';
import styles from './Fields.module.scss';

const SelectField = ({ className, disabled, includeEmptyOption, input, labelText, options = [],  }) => {
  return (
    <div className={cn(className)}>
      <label>{labelText}</label>
      <select className={cn(styles.select)} disabled={disabled} {...input}>
        {includeEmptyOption && <option>-- Select an option --</option>}
        {options.map(({ label, value }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
