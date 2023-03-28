import './App.css'
import { Greet } from './components/Greet'
import Header from './components/Header'
import Oscar from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
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
    }
  ]
  return (
    <div className="App">
      <Greet name='lyons' messageCount={10} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList name={nameList}/>
      <Status status = 'loading' />
      <Header>Placeholder txt</Header>
      <Oscar>
        <Header>
          Oscar goes to Leornardo Dicaprio
        </Header>
      </Oscar>
    </div>
  )
}

export default App
