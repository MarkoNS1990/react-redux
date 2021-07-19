import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes:10
}

const cakeReducer = (state = initialState,action)=>{
    switch(action.type){
        case BUY_CAKE :
            console.log(typeof action.payload)
            return{
                ...state,
                numOfCakes: state.numOfCakes - action.payload
                
            }
        default:
            return state
    }
}

export default cakeReducer