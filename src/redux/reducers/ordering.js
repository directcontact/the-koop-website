import { 
    ADD_LOCATION,
    ADD_CHICKEN,
    ADD_APPETIZER,
    ADD_RICE,
    ADD_TROTTER,
    ADD_SOUP,
    ADD_SIDE,
    ADD_NAME,
    ADD_NOTES,
    SET_TIME,
    EXIT_ORDER
} from '../types'

let initialState = {
    order: {
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
}

const ordering = (state = {
    order: {
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
}, action) => {

    switch(action.type) {
        case ADD_LOCATION:
            return {
                ...state,
                order: {
                    ...state.order, 
                    location: action.location
                }
            }
        case ADD_CHICKEN:
            return {
                ...state,
                order: {
                    ...state.order,
                    food: {
                        ...state.order.food,
                        chicken: [...state.order.food.chicken, action.chicken]
                    },
                    totalQuant: state.order.totalQuant + 1
                    // add PRICE TO SUBTOTAL!!
                }
            }
        case ADD_APPETIZER:
            return {
                ...state,
                order: {
                    ...state.order,
                    food: {
                        ...state.order.food,
                        appetizers: [...state.order.food.appetizers, action.appetizer]
                    },
                    totalQuant: state.order.totalQuant + 1,
                    subTotal: state.order.subTotal + action.appetizer.price
                }
            }
        case ADD_RICE:
            return {
                ...state,
                order: {
                    ...state.order,
                    food: {
                        ...state.order.food,
                        rice: [...state.order.food.rice, action.rice]
                    },
                    totalQuant: state.order.totalQuant + 1,
                    subTotal: state.order.subTotal + action.rice.price
                }
            }
        case ADD_TROTTER:
            return {
                ...state,
                order: {
                    ...state.order,
                    food: {
                        ...state.order.food,
                        trotter: [...state.order.food.trotter, action.trotter]
                    },
                    totalQuant: state.order.totalQuant + 1,
                    subTotal: state.order.subTotal + action.trotter.price
                }
            }
        case ADD_SOUP: 
            return {
                ...state,
                order: {
                    ...state.order,
                    food: {
                        ...state.order.food,
                        soups: [...state.order.food.soups, action.soup]
                    },
                    totalQuant: state.order.totalQuant + 1,
                    subTotal: state.order.subTotal + action.soup.price
                }
            }
        case ADD_SIDE:
            return {
                ...state,
                order: {
                    ...state.order,
                    food: {
                        ...state.order.food,
                        sides: [...state.order.food.sides, action.side]
                    },
                    totalQuant: state.order.totalQuant + 1,
                    subTotal: state.order.subTotal + action.side.price
                }
            }
        case ADD_NAME:
            return {
                ...state,
                order: {
                    ...state.order,
                    name: action.name 
                }
            }
        case ADD_NOTES:
            return {
                ...state,
                order: {
                    ...state.order,
                    notes: action.notes
                }
            }
        case SET_TIME:
            return {
                ...state,
                order: {
                    ...state.order,
                    time: action.time
                }
            }
        case EXIT_ORDER:
            return {
                order: {
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
            }
        default: 
            return { ...state }
    }

}

export default ordering