import React, { useEffect, useState } from 'react'

const Form = ({add}) => {

    const [userInfo , setUserInfo] = useState({
        userName : "",
        email : "",
        age : ""
    })
    
    const isTrue = true

    const handleChangeInput = (e) => {
        setUserInfo({
            ...userInfo ,[e.target.name] : e.target.value
        })
    }


    const addNewUser = () => {
        add(userInfo)
    }

    useEffect(()=>{
        console.log('use Effect log')
    },[isTrue])
    
    
  return (
    <div>
        
        <h1> Form add user </h1>
        user name :<input type="text" name="userName" onChange={handleChangeInput} /> <br/>
        email : <input type="text" name="email" onChange={handleChangeInput} /> <br/>
        age : <input type="text" name="age" onChange={handleChangeInput} /> <br/>
        <button onClick={addNewUser}> Add user </button>
        <hr></hr>
        user name value : <p> {userInfo.userName} </p> <br></br>
        user email value : <p> {userInfo.email} </p> <br></br>
        user age value : <p> {userInfo.age} </p> <br></br>

    </div>
  )
}

export default Form