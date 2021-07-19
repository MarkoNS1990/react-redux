import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyIceCream } from '../redux/icecream/icecreamActions'

function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector(state=>state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num of ice creams : {numOfIceCreams}</h1>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default HooksIceCreamContainer
