import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Context = () => {
    const theme = useContext(ThemeContext)

    return <div style={{ backgroundColor: theme.primary.main}}>Theme Context</div>
}

// if passing another component as a prop
//  component: React.Component
//  component: React.Component<CompProps>
// import the components props and add in the angkle brackets