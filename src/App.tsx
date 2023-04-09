import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import { Greet } from './components/Greet'
import Header from './components/Header'
import Input from './components/Input'
import Oscar from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import LoggedIn from './components/state/LoggedIn'
import User from './components/state/User'
import Counter from './components/Counter'
import { Status } from './components/Status'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Bruc',
      last: 'Wayne',
    },
    {
      first: 'Brce',
      last: 'Wayne',
    },
    {
      first: 'Brce',
      last: 'Wayne',
    }
  ]
  return (
    <div className="App">
      <Greet name='lyons' messageCount={10} isLoggedIn/>
      <Person name={personName} />
      <PersonList name={nameList}/>
      <Status status = 'loading' />
      <Header>Placeholder txt</Header>
      <Oscar>
        <Header>
          Oscar goes to Leornardo Dicaprio
        </Header>
      </Oscar>
      <Button handleClick={(event, id) => {
        alert(event)
      }} />
      <Input value='' handleChange={event => alert(event)}/>
      <Container styles={{border: '1px solid black'}}/>
      <LoggedIn />
      <User/>
      <Counter />
    </div>
  )
}

export default App
