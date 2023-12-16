import {
    SET_LIST,
    SET_PAYMENT,
    SET_ADDRESS
} from "../actions/shoppingCardActions"

const initialState = {
    card: [{ count: 0, checked: false, product: {} }],
    payment: {},
    address: {}
}

const shoppingCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            const existingProduct = state.card.findIndex(item => item.product.id === action.payload.id);
            if (existingProduct !== -1) {
                const updatedCard = [...state.card]
                updatedCard[existingProduct] = {
                    ...updatedCard[existingProduct], count: updatedCard[existingProduct].count + 1
                }
                return {
                    ...state, card: updatedCard
                }
            } else {
                return {
                    ...state, card: [...state.card, { count: 1, checked: true, product: action.payload }]
                }
            }
        case SET_PAYMENT:
            return {
                ...state, payment: action.payload
            }
        case SET_ADDRESS:
            return {
                ...state, address: action.payload
            }
        default:
            return state;
    }
}

export default shoppingCardReducer;