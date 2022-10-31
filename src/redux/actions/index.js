// Coloque aqui suas actions
import api from '../../services/Api';

const INPUT_EMAIL = 'INPUT_EMAIL';
const REMOVE_EXPENSES = 'REMOVE_EXPENSES';
const EXPENSE_SETTING = 'EXPENSE_SETTING';
const RENDER_CCOINS = 'RENDER_CCOINS';
const GET_EXPENSES = 'GET_EXPENSES';
const GET_CURRENCY = 'GET_CURRENCY';
const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload,
});

const removeExpense = (id) => ({
  type: REMOVE_EXPENSES,
  payload: {
    id,
  },
});

const expenseSetting = (id) => ({
  type: EXPENSE_SETTING,
  payload: {
    id,
  },
});

const renderCCoins = (payload) => ({
  type: RENDER_CCOINS,
  payload,
});

const getExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

const getCurrency = () => ({
  type: GET_CURRENCY,
});

const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

const getCurrencyThunk = (expenses) => async (dispatch) => {
  const response = await api();
  if (expenses !== undefined) {
    const payload = { ...expenses, exchangeRates: response };
    dispatch(getExpenses(payload));
  } else {
    dispatch(getCurrencySuccess(response));
  }
};

export {
  INPUT_EMAIL,
  REMOVE_EXPENSES,
  EXPENSE_SETTING,
  RENDER_CCOINS,
  GET_EXPENSES,
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR,
  inputEmail,
  removeExpense,
  expenseSetting,
  renderCCoins,
  getExpenses,
  getCurrency,
  getCurrencySuccess,
  getCurrencyThunk,
};
