
import { useRef, useState } from 'react';
import cn from 'classnames';
import useOnClickOutside from 'hooks/useOnClickOutside';
import styles from './Fields.module.scss';

const CheckboxArray = ({ disabled, input, options = [] }) => {
  const ref = useRef();
  const [isExpanded, setIsExpanded] = useState(false);
  
  useOnClickOutside(ref, () => setIsExpanded(false));
  
  const toggleIsExpanded = () => setIsExpanded(!isExpanded);
  
  let numSelected = input.value.length ? `${input.value.length} Appliances Selected` : '-- Choose an Appliance --';
  numSelected = input.value.length === 1 ? input.value[0] : numSelected;

  return (
    <div className={cn(styles.checkboxArray, {
      [styles.checkboxArray__isExpanded]: isExpanded
      })} ref={ref}>
      <button className={styles.checkboxCount} onClick={toggleIsExpanded} type='button'>{numSelected}</button>
      
      <div className={cn(styles.checkboxOptions, {
        [styles.checkboxOptions__isExpanded]: isExpanded
      })}>
        {options.map(({ label, value }) => (
          <div key={value} className={styles.checkboxWrapper}>
            <input type="checkbox"
                className={styles.checkboxInput}
                checked={input.value.indexOf(value) !== -1}
                name={`${input.name}[${value}]`}
                value={value}
                id={`${input.name}[${value}]`}
                onChange={(event) => {
                  const newValue = [...input.value];
                  if (event.target.checked) {
                      newValue.push(value);
                  } else {
                      newValue.splice(newValue.indexOf(value), 1);
                  }
                  return input.onChange(newValue);
              }}
                disabled={disabled} />
            <label className={styles.checkboxLabel} htmlFor={`${input.name}[${value}]`}>{label}</label>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CheckboxArray;
