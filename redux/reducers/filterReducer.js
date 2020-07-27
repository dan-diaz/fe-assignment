import { createAction } from '@reduxjs/toolkit';

const initialState = {
  data: null
};

// const SET_PRODUCT_DATA = '@@filter/SET_PRODUCT_DATA';
const SET_SORT_KEY = '@@filter/SET_SORT_KEY';
const SET_SELECTED_APPLIANCES = '@@filter/SET_SELECTED_APPLIANCES';

export const setProductData = createAction('@@filter/SET_PRODUCT_DATA', data => ({
  payload: {
    data
  }
}));

export const setSelectedAppliances = createAction('@@filter/SET_SELECTED_APPLIANCES', value => ({
  payload: {
    data
  }
}));

export const setSortKey = key => ({
  type: SET_SORT_KEY,
  key
});

const reducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case setProductData.type:
            return {...state, data: action.payload.data, filteredData: action.payload.data};
        default:
            return {...state};
    }
};

export default reducer;