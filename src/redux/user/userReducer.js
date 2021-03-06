import { ADD_USER, FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, REMOVE_USER } from "./userTypes"

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
        case ADD_USER :
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        case REMOVE_USER :
           return{
               ...state,
               users:[...state.users.filter(user=>user.id!==action.payload.id)]
           }           
        default:
            return state          
    }
}

export default userReducer