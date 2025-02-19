
import './App.css'
import CounterApp from './component/CounterApp'
import RichTextEditor from './component/RichTextEditor'
import UserForm from './component/UserForm'

function App() {
  

  return (
    <div className='main-class'>
       <CounterApp />
      <UserForm />
      <RichTextEditor />
    </div>
  )
}

export default App
