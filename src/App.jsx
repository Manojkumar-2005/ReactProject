// import LearnComponents from "./components/LearnComponents"

// import Header from "./components/Header"
// import ArraySample from './components/ArraySample';
// import OneofSample from './components/OneofSample';
// import Student from './components/Student'
// import MultitypeComponent from './components/MultitypeComponent';
import FunctionSample from './components/FunctionSample';
import './css/app.css'

function App() {
  const handleClick=()=>{
    alert("Button clicked!")
  }
  // const items=[
  //   {id: 1, name: "Item 1"},
  //   {id: 2, name: "Item 2"},
  //   {id: 3, name: "Item 3"},
  // ]
  return (
  <>
     {/* <div>Manojkumar React Tutorials </div>
    <LearnComponents/> */}
    {/* <Header/> */}
    {/* <Student name="Manojkumar" age={19} isMarried={true}/>
    <Student name="Ram" age={20} isMarried={true}/>
    <Student name="Abi" age={21} isMarried={true}/>
    <Student name="Sara" age={21} isMarried={true}/> */} 
    {/* <ArraySample items={items}/> */}
    {/* <OneofSample color="green"/> */}
    {/* <MultitypeComponent value="Hello"/>
    <MultitypeComponent value={19}/>
    <MultitypeComponent value={true}/> */}
    <div>
      <h2>Parent Component</h2>
      <FunctionSample />
    </div>
  </>
  )
}

export default App;
