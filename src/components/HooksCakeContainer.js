import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const dispatch = useDispatch()
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    return (
        <div>
            <h1>Num of cakes: {numOfCakes} </h1>
            <button onClick = {()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
