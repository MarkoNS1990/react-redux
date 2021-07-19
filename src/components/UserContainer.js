import React ,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

function UserContainer() {
    const users = useSelector(state=>state.user.users)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (
        <div>
            <ul>
                {users.map(user=><li key={Math.random()*1000}>{user}</li>)}
            </ul>
        </div>
    )
}

export default UserContainer
