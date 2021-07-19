import React ,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers,createUser } from '../redux/user/userActions'

function UserContainer() {
    const users = useSelector(state=>state.user.users)
    const dispatch = useDispatch()
    const [name,setName] = useState('')

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    const onCreateUser = ()=>{
        const user = {id:Math.random()*1000,name:name}
        
        dispatch(createUser(user))
        setName('')
    }

    return (
        <div>
            <ul>
                {users && users.map(user=><li key={Math.random()*1000}>{user.name}</li>)}
            </ul>
            <input type="text" placeholder='enter name' onChange={e=>setName(e.target.value)} value={name}/>
            <button onClick = {onCreateUser}>create</button>
        </div>
    )
}

export default UserContainer
