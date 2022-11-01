import { ADD_EXPENSE, CURRENCY, ERASE_EXPENSE, ID_EDIT, SEND_EDIT } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case ERASE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  case ID_EDIT:
    return {
      ...state,
      idToEdit: action.payload,
      editor: true,
    };
  case SEND_EDIT:
    return {
      ...state,
      expenses: action.payload,
      editor: false,
    };
  default:
    return state;
  }
};

export default wallet;
