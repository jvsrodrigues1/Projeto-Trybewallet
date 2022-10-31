// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_EXPENSES,
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_ERROR,
  REMOVE_EXPENSES,
  RENDER_CCOINS,
  EXPENSE_SETTING,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  coins: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state,
    };
  case RENDER_CCOINS:
    return { ...state,
      coins: action.payload,
    };
  case GET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_CURRENCY_SUCCESS:
    return { ...state,
      currencies: [action.payload],
    };
  case GET_CURRENCY_ERROR:
    return { ...state,
      error: action.payload.error,
    };
  case REMOVE_EXPENSES:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload.id) };
  case EXPENSE_SETTING:
    return { ...state,
      setexpenses: state.expenses.filter((expense) => expense.id !== action.payload.id) };

  default:
    return state;
  }
};
export default walletReducer;
