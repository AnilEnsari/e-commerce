export const SET_LIST = "SET_LIST"
export const DELETE_LIST = "DELETE_LIST"
export const SET_PAYMENT = "SET_PAYMENT"
export const SET_ADDRESS = "SET_ADDRESS"

export const addToList = (addedProduct) => {
    return { type: SET_LIST, payload: addedProduct }
}
export const setPayment = (payment) => {
    return { type: SET_PAYMENT, payload: payment }
}
export const setAddress = (address) => {
    return { type: SET_ADDRESS, payload: address }
}