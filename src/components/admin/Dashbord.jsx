import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/authReducer';

const Dashbord = () => {
    const dispatch=useDispatch();
  return (
    <div>Dashbord
    <button onClick={()=>dispatch(logout())}>
        logout
    </button></div>

  )
}

export default Dashbord