import React from 'react'
import { buyIceCream } from '../redux/icecream/icecreamActions'
import {connect} from 'react-redux'

function IceCreamContainer({numOfIceCreams, buyIceCream}) {
    return (
        <div>
            <h2>Number of ice creams: {numOfIceCreams}</h2>
            <button onClick = {buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream: ()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
