import { createSelector } from 'reselect'
import { SORT_KEYS } from 'components/Filter/filterUtils';

const getData = state => state.filter.data;
const getSelectedApplianceTypes = state => state.form?.filter?.values?.appliances || [];
const getIsQuickShip = state => state.form?.filter?.values?.is_quick_ship || false;
const getSortKey = state => state.form?.filter?.values?.sort || null;

export const applianceOptionsSelector = createSelector(
  getData,
  data => {
    if (!data) {
      return [];
    }
    const applianceTypes = new Set(); 
  
    data.forEach(product => {
      product.items.forEach(item => {
        applianceTypes.add(item['~product_type']);
      })
    });
  
    let options = [...applianceTypes];
    options.sort();

    options = options.map((type) => {
      return ({ value: type, label: type });
    });

    return options;
  }
);

export const productFilterSort = createSelector(
  [getData, getSelectedApplianceTypes, getIsQuickShip, getSortKey],
  (data, applianceTypes, isQuickShip, sortKey) => {
    let filteredData = data ? [...data] : [];
    const filterApplianceTypes = applianceTypes.length;
    let applianceMap = null;
    
    if (filterApplianceTypes) {
      applianceMap = {};
      applianceTypes.forEach(type => applianceMap[type] = true);
    }
    
    if (filterApplianceTypes || isQuickShip) {
      filteredData = filteredData.reduce((acc, product) => {
        // if we're filtering on appliance types and none of the items are in the appliance map, skip product
        if (filterApplianceTypes && !product.items.some(item => applianceMap[item['~product_type']])) {
          return acc;
        }

        // if we're only accepting quick ship and this product is not quick ship, skip product
        if (isQuickShip && !product.is_quick_ship) {
          return acc;
        }

        // include the product
        acc.push(product);
        
        return acc;
      }, []);
    }
    
    if (sortKey) {
      const { reverse, sortFunction } = SORT_KEYS[sortKey];
      sortFunction ? filteredData.sort(sortFunction) : filteredData.sort();
      reverse && filteredData.reverse();
    }

    return filteredData;
  }
)