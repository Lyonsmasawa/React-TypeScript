import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'

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
    }
  ]
  return (
    <div className="App">
      <Greet name='lyons' messageCount={10} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList name={nameList}/>
    </div>
  )
}

export default App
