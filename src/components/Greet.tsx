type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
       {
        props.isLoggedIn ? ` welcome ${props.name}, you have ${props.messageCount} messages` : 
        `Welcome guest`
       }
    </div>
  )
}