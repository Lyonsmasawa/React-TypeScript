import { useState } from 'react'

const LoggedIn = () => {
    const [ins, setIns] = useState(false)

    const handleLogin = () => {
        setIns(true)
    }
    const handleLogOut = () => {
        setIns(false)
    }
  return (
  <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogOut}>LogOut</button>
    <div>User is {ins ? 'logged in' : 'logged out'}</div>
  </>
  )
}

export default LoggedIn