import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Accordion from 'components/Accordion';
import FieldWrapper from 'components/FormFields/FieldWrapper';
import SelectField from 'components/FormFields/SelectField';
import CheckboxArray from 'components/FormFields/CheckboxArray';
import Checkbox from 'components/FormFields/Checkbox';
import Button from 'components/Button';
import { Media, MediaContextProvider } from 'utils/media';  
import { applianceOptionsSelector } from 'redux/selectors';
import cn from 'classnames';
import { SORT_OPTIONS } from './filterUtils';
import styles from './Filter.module.scss';

const initialValues = {
  sort: SORT_OPTIONS[0].value
};

const Filter = ({ isLoading, pristine, reset }) => {
  const [ isExpanded, setIsExpanded ] = useState(false);
  const applianceOptions = useSelector(applianceOptionsSelector);
  
  const handleToggleExpand = () => setIsExpanded(!isExpanded);
  const handleClearAll = () => {
    reset();
  }

  return (
    <MediaContextProvider>
      <div className={styles.formWrapper}>
        <form className={cn(styles.form, {[styles.formExpanded]: isExpanded})}>
          <Media lessThan="md">
            <div className={styles.formHeader}>
              <h2>Sort &amp; Filter</h2>
              <button className={styles.buttonClose} onClick={handleToggleExpand} type='button'/>
            </div>

            <FieldWrapper labelText='Sort By:'>
              <Field
                component={SelectField}
                name='sort'
                disabled={isLoading}
                options={SORT_OPTIONS}
              />
            </FieldWrapper>

            <FieldWrapper labelText='Filter By:'>
              <div className={styles.filterButtonRow}>
                <Button text='Clear All' onClick={handleClearAll} alternate disabled={pristine} />
                <Button text='Apply' onClick={handleClearAll} disabled={pristine} />
              </div>
            </FieldWrapper>
            
            <Accordion label='Appliance Type'>
              <Field
                component={CheckboxArray}
                name='appliances'
                labelText='Select Appliances'
                disabled={isLoading}
                options={applianceOptions}
              />
            </Accordion>
            
            <Accordion label='Delivery Type'>
              <Field component={Checkbox} name='is_quick_ship' disabled={isLoading} labelText='Quick Ship' />
            </Accordion>

          </Media>

          <Media greaterThanOrEqual="md">
            <div className={styles.formContent}>
              <FieldWrapper labelText='Select Appliances:'>
                <Field
                  component={CheckboxArray}
                  name='appliances'
                  disabled={isLoading}
                  options={applianceOptions}
                />
              </FieldWrapper>
              <FieldWrapper labelText='Sort By:'>
                <Field
                  component={SelectField}
                  name='sort'
                  disabled={isLoading}
                  options={SORT_OPTIONS}
                />
              </FieldWrapper>
              
              <FieldWrapper labelText='Delivery Method:'>
                <Field component={Checkbox} name='is_quick_ship' disabled={isLoading} labelText='Quick Ship' />
              </FieldWrapper>
              

              <Button text='Clear All' onClick={handleClearAll} alternate disabled={pristine} />
            </div>
          </Media>
        </form>
        
        <Media lessThan="md">
          {!isExpanded && <Button className={styles.buttonOpen} blue text='Sort & Filter' onClick={handleToggleExpand} />}
        </Media>
      </div>
    </MediaContextProvider>
  );
};

export default reduxForm({
  form: 'filter',
  initialValues
})(Filter);