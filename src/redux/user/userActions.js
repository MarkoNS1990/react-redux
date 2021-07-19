import axios from 'axios'

import { ADD_USER, FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userTypes"


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

export const addUser = (user)=>{
    return {
        type:ADD_USER,
        payload:user
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersBegin)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const users = res.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err=>{
            dispatch(fetchUsersFailure(err.message))
        })
    }
}

export const createUser = (user)=>{
    return (dispatch)=>{
        dispatch(fetchUsersBegin)
        axios.post('https://jsonplaceholder.typicode.com/users',{user})
        .then(res=>{
            console.log(res);
            dispatch(addUser(user))
        })
        .catch(err=>{
            dispatch(fetchUsersFailure(err.message))
        })
    }
}