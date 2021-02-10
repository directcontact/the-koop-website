import {
    ADD_LOCATION,
    ADD_CHICKEN,
    ADD_ITEM,
//     ADD_APPETIZER,
//     ADD_RICE,
//     ADD_TROTTER,
//     ADD_SIDE,
//     ADD_SOUP,
    ADD_NAME,
    ADD_NOTES,
    ADD_EMAIL,
    SET_TIME,
    EXIT_ORDER,
    REMOVE_ITEM

} from '../types';

export const addLocation = (location) => ({
    
        type: ADD_LOCATION,
        payload: location
    
})

export const addChicken = (chicken) => ({
    
        type: ADD_CHICKEN,
        payload: chicken
    
})

export const addItem = (item) => ({
        type: ADD_ITEM,
        payload: item
})

// export const addAppetizer = (appetizer) => ({
    
//         type: ADD_APPETIZER,
//         payload: appetizer, quant: 0
    
// })

// export const addRice = (rice) => ({
   
//         type: ADD_RICE,
//         payload: rice
    
// })

// export const addTrotter = (trotter) => ({
    
//         type: ADD_TROTTER,
//         payload: trotter
    
// })

// export const addSoup = (soup) => ({
    
//         type: ADD_SOUP,
//         payload: soup
    
// })

// export const addSide = (side) => ({

//         type: ADD_SIDE,
//         payload: side
    
// })

export const addName = (name) => ({
    
        type: ADD_NAME,
        payload: name
    
})

export const addNotes = (notes) => ({

        type: ADD_NOTES,
        payload: notes
    
})

export const addEmail = (email) => ({

        type: ADD_EMAIL,
        payload: email
})

export const setTime = (time) => ({
   
        type: SET_TIME,
        payload: time
    
})

export const exitOrder = () => ({
    
        type: EXIT_ORDER,
    
})

export const removeItem = (item) => ({
        type: REMOVE_ITEM,
        payload: item
})