type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props 
  return (
    <div>
       {
        props.isLoggedIn ? ` welcome ${props.name}, you have ${messageCount} messages` : 
        `Welcome guest`
       }
    </div>
  )
}