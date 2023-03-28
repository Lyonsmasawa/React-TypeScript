import {useState} from 'react'

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [ins, setIns] = useState<AuthUser | null>(null)
    // type assertion - if you know the user will never be null you can tell the compiler you know beter than it
    // const [ins, setIns] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setIns({name: 'Lyons', email: 'lyons@gmail.com'})
    }
    const handleLogOut = () => {
        setIns(null)
    }
  return (
  <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogOut}>LogOut</button>
    <div>User name is {ins?.name}</div>
    <div>User email is {ins?.email}</div>
  </>
  )
}

export default User