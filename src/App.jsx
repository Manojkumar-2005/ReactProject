// import LearnComponents from "./components/LearnComponents"

// import Header from "./components/Header"
import Student from './components/Student'
import './css/app.css'

function App() {

  return (
  <>
    {/* <div>Manojkumar React Tutorials </div>
    <LearnComponents/> */}
    {/* <Header/> */}
    <Student name="Manojkumar" age={19} isMarried={true}/>
    <Student name="Ram" age={20} isMarried={true}/>
    <Student name="Abi" age={21} isMarried={true}/>
    <Student name="Sara" age={21} isMarried={true}/>
  </>
  )
}

export default App;
