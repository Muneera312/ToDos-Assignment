import { useState } from "react";


function App() {


  const[username,setUsername]=useState ('Muneera');
  const [names,setNames]=useState(['Muneera','Saadiya','maheen'])
      
  function changeusername(){
      console.log("changeusername fun called");
      
      setUsername('Saadiya')
     
      console.log(username,'user updated');
  }
  return (
    <>
     
       <h1>Hello {username}</h1>
       
       <button onClick={ ()=>changeusername()}>change user</button>
      {

       names.map((ele,index)=>
       (<h2> 
        user is {ele}
        </h2> )
       )


      }
 
 
    </>
  )
}

export default App
