import { FETCH_DATA } from "./ActionType"

const initialState = {
    user: []
}

export const reducer = (storeData = initialState, action) => {
    if (action.type == FETCH_DATA){
        return {
            user: action.payload
        }
    }
    return storeData
}