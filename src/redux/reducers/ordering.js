import { 
    ADD_LOCATION,
    ADD_CHICKEN,
    ADD_ITEM,
    ADD_APPETIZER,
    ADD_RICE,
    ADD_TROTTER,
    ADD_SOUP,
    ADD_SIDE,
    ADD_NAME,
    ADD_NOTES,
    SET_TIME,
    EXIT_ORDER,
    REMOVE_ITEM
} from '../types'

let initialState = {
    location: '',
    food: {
        chicken: [],
        appetizers: [],
        rice: [],
        trotter: [],
        soups: [],
        sides: [],
    },
    cart: [],
    address: {},
    name: '',
    notes: '',
    time: '',
    totalQuant: 0,
    subTotal: 0,
}

let currentItem
let cartItems

const ordering = (state = {
    location: '',
    food: {
        chicken: [],
        appetizers: [],
        rice: [],
        trotter: [],
        soups: [],
        sides: [],
    },
    cart: [],
    address: {},
    name: '',
    notes: '',
    time: '',
    totalQuant: 0,
    subTotal: 0,
}, action) => {

    switch(action.type) {
        case ADD_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case ADD_CHICKEN:
            cartItems = state.cart.filter(item => item.item !== action.payload.item)
            currentItem = state.cart.filter(item => item.item === action.payload.item)
            console.log(action.payload)
            if (currentItem.length > 0) {
                currentItem = {...currentItem[0], quant: currentItem[0].quant + 1}
            } else {
                currentItem = {...action.payload, quant: 1}
            }

            return {
                ...state,
                food: {
                    ...state.food,
                    chicken: [...state.food.chicken, action.payload],
                },
                cart: [...cartItems, currentItem],
                subTotal: state.subTotal + action.payload.price,
                totalQuant: state.totalQuant + 1,
                subTotal: state.subTotal + action.payload.price
                // add PRICE TO SUBTOTAL!!
            }
        case ADD_ITEM:
            cartItems = state.cart.filter(item => item.item !== action.payload.item)
            currentItem = state.cart.filter(item => item.item === action.payload.item)

            if (currentItem.length > 0) {
                currentItem = {...currentItem[0], quant: currentItem[0].quant + 1}
            } else {
                currentItem = {...action.payload, quant: 1}
            }

            return {
                ...state,
                food: {
                    ...state.food,
                    appetizers: [...state.food.appetizers, action.payload]
                },
                cart: [...cartItems, currentItem],
                totalQuant: state.totalQuant + 1,
                subTotal: state.subTotal + action.payload.price
            }
        case ADD_APPETIZER:
            cartItems = state.cart.filter(item => item.item !== action.payload.item)
            currentItem = state.cart.filter(item => item.item === action.payload.item)

            if (currentItem.length > 0) {
                currentItem = {...currentItem[0], quant: currentItem[0].quant + 1}
            } else {
                currentItem = {...action.payload, quant: 1}
            }

            return {
                ...state,
                food: {
                    ...state.food,
                    appetizers: [...state.food.appetizers, action.payload]
                },
                cart: [...cartItems, currentItem],
                totalQuant: state.totalQuant + 1,
                subTotal: state.subTotal + action.payload.price
            }
            
        case ADD_RICE:
            return {
                ...state,
                food: {
                    ...state.food,
                    rice: [...state.food.rice, action.payload]
                },
                cart: [...state.cart, action.payload],
                totalQuant: state.totalQuant + 1,
                subTotal: state.subTotal + action.payload.price
            }
        case ADD_TROTTER:
            return {
                ...state,
                food: {
                    ...state.food,
                    trotter: [...state.food.trotter, action.payload]
                },
                cart: [...state.cart, action.payload],
                totalQuant: state.totalQuant + 1,
                subTotal: state.subTotal + action.payload.price
            }
        case ADD_SOUP: 
            return {
                ...state,
                food: {
                    ...state.food,
                    soups: [...state.food.soups, action.payload]
                },
                cart: [...state.cart, action.payload],
                totalQuant: state.totalQuant + 1,
                subTotal: state.subTotal + action.payload.price
            }
        case ADD_SIDE:
            return {
                ...state,
                    food: {
                        ...state.food,
                        sides: [...state.food.sides, action.payload]
                    },
                    cart: [...state.cart, action.payload],
                    totalQuant: state.totalQuant + 1,
                    subTotal: state.subTotal + action.payload.price
            }
        case ADD_NAME:
            return {
                ...state,
                name: action.payload
            }
        case ADD_NOTES:
            return {
                ...state,
                notes: action.payload
            }
        case SET_TIME:
            return {
                ...state,
                time: action.payload
            }
        case EXIT_ORDER:
            return {
                location: '',
                food: {
                    chicken: [],
                    appetizers: [],
                    rice: [],
                    trotter: [],
                    soups: [],
                    sides: [],
                },
                address: {},
                name: '',
                notes: '',
                time: '',
                totalQuant: 0,
                subTotal: 0,
            }
        case REMOVE_ITEM: 
            cartItems = state.cart.filter(item => item.item !== action.payload.item)
            
            
            return {
                ...state,
                cart: [...cartItems],
                totalQuant: state.totalQuant - action.payload.quant,
                subTotal: state.subTotal - (action.payload.price * action.payload.quant)
            }
        default: 
            return { ...state }
    }

}

export default ordering