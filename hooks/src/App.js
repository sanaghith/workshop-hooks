import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Form from './Form';
function App() {

  const [count,setCount] = useState (0)
  const [userList , setUserList] = useState([
    {
      userName : "foulen-01",
      email : "foulen-1@email.com",
      age : "25"
    }
  ])
  const [show, setShow] = useState(false)

  const handleIncrement = () => {
    setCount(count+1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count-1)
    }
    
  }

  const handleShow = () => {
    setShow(!show)
  }

  const handleUserList = (obj) => {
    setUserList([...userList , obj])
  }


  return (
    <div className="App">
      <button onClick={handleShow}> Show/hide </button>
      <h1> Counter </h1>
      <button onClick={handleDecrement}> - </button>
      <input type="number" value={count}/>
      <button onClick={handleIncrement}> + </button>
      <hr/>
      {
        show ? <Form add={handleUserList} /> : "famech form"
      }
     

      <div>
        <h1> User List </h1>
        <div>
          {
            userList.map((elm)=>(
              <div>
                <hr/>
                <h1> user Name : {elm.userName} </h1>
                <h1> user email : {elm.email} </h1>
                <h1> user age : {elm.age} </h1>
                <hr/>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default App;
