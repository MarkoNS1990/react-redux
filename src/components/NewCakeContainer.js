import React ,{useState} from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import {connect} from 'react-redux'

function NewCakeContainer({numOfCakes,buyCake}) {
    const [number,setNumber] = useState(1)
    return (
        <div>
            <h1>Number of cakes: {numOfCakes}</h1>
            <input type="text" value={number} onChange = {(e)=>setNumber(e.target.value)} />
            <button onClick = {()=>buyCake(number)} >Buy {number} cakes</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: (number)=>dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer) 
