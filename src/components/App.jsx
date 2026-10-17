import React, { useState } from "react";

function App() {
  const [firstName,setfirstName] = useState('');
    const [secondName,setSecondName] = useState('');
    const [fullName,setFullName]= useState('');

    function handleFirst(event){
      setfirstName(event.target.value);

    }

       function handleSecond(event){
      setSecondName(event.target.value);
    }

    function handleClick(event) {
            event.preventDefault();
      setFullName(`${firstName} ${secondName}`);
    }

  
  return (
    
    <div className="container">
      <h1>Hello{fullName}</h1>
      <form onSubmit={handleClick} >
        <input value={firstName} onChange={handleFirst} name="fName" placeholder="First Name" />
        <input  value={secondName} onChange={handleSecond}  name="lName" placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
