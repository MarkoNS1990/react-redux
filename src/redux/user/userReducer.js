import { FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState = {
    loading:false,
    users:[],
    error:''
}

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_BEGIN :
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS :
            return {
                ...state,
                users: action.payload
            }
        case FETCH_USERS_FAILURE :
            return {
                ...state,
                error: action.payload
            }  
        default:
            return state          
    }
}

export default userReducer