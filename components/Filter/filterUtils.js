export const SORT_KEYS = {
  PRICE_ASC: {
    label: 'Lowest Price',
    sortFunction: (a, b) => a.prices.final - b.prices.final
  },
  PRICE_DESC: {
    label: 'Highest Price',
    sortFunction: (a, b) => b.prices.final - a.prices.final
  }
};

export const SORT_OPTIONS = [
  {
    label: SORT_KEYS.PRICE_DESC.label,
    value: 'PRICE_DESC'
  },
  {
    label: SORT_KEYS.PRICE_ASC.label,
    value: 'PRICE_ASC'
  }
];

export const DELIVERY_TYPE_OPTIONS = [
  {
    label: 'Quick Ship',
    value: 'is_quick_ship'
  }
];