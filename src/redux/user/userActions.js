import axios from 'axios'

import { FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userTypes"


export const fetchUsersBegin = ()=>{
    return {
        type:FETCH_USERS_BEGIN
    }
}

export const fetchUsersSuccess = (users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailure = (error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersBegin)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const users = res.data.map(user=>user.name)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err=>{
            dispatch(fetchUsersFailure(err.message))
        })
    }
}