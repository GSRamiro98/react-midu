import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    name: 'Ramiro',
    userName: 'a',
  },
  {
    name: 'Fabrizio',
    userName: 't',
  },
  {
    name: 'Fernando',
    userName: 'p',
  },
  {
    name: 'Ramiro',
    userName: 'k',
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ name, userName }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}