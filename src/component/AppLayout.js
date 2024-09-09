import React from 'react'
import Cookies from 'js-cookie'

import { Link } from 'react-router-dom'

const AppLayout = ({children}) => {
    
    const token =Cookies.get("token")
    console.log(token)
    if(!token) return <div className='homestyle'><p className='homestyle'>user not registed please log in</p>
    <Link className='homestyle' to={"/login"}>log in</Link>
    </div>
    
  return (
    <div>
      {children}
    </div>
  )
}

export default AppLayout
