import {
  SET_LIST,
  SET_PAYMENT,
  SET_ADDRESS,
  DECREASE_LIST,
  FILTERED_PRODUCT,
  CHECKED_PRODUCT,
} from "../actions/shoppingCardActions";

const initialState = {
  card: [{ count: 0, checked: false, product: {} }],
  payment: {},
  address: {},
};

const shoppingCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      const existingProduct = state.card.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingProduct !== -1) {
        const updatedCard = [...state.card];
        updatedCard[existingProduct] = {
          ...updatedCard[existingProduct],
          count: updatedCard[existingProduct].count + 1,
        };
        return {
          ...state,
          card: updatedCard,
        };
      } else {
        return {
          ...state,
          card: [
            ...state.card,
            { count: 1, checked: true, product: action.payload },
          ],
        };
      }
    case CHECKED_PRODUCT:
      const updatedCard = state.card.map((item) => {
        if (item.product.id === action.payload.product.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });

      return {
        ...state,
        card: updatedCard,
      };

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case DECREASE_LIST:
      const decreasedProduct = state.card.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (decreasedProduct !== -1) {
        const updatedCard = [...state.card];
        updatedCard[decreasedProduct] = {
          ...updatedCard[decreasedProduct],
          count:
            updatedCard[decreasedProduct].count - 1 > 1
              ? updatedCard[decreasedProduct].count - 1
              : 1,
        };
        return {
          ...state,
          card: updatedCard,
        };
      }
    case FILTERED_PRODUCT:
      return {
        ...state,
        card: state.card.filter(
          (cards) => cards.product.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default shoppingCardReducer;
