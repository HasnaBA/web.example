import React from 'react';

import './App.css';
import DataFetching from './DataFetching';

function App() {

 
  return (
    
    <div className="App">
      <DataFetching />
      <h1>Inscription </h1>
      <form>            
        <label htmlFor="fName">First Name</label>   
        <input type="text" name="fName" id="fName" /> 
        <label htmlFor="lName">Last Name</label>   
        <input type="text" name="lName" id="lName" />
        <label htmlFor="Email">Email</label>   
        <input type="text" name="Email" id="Email" />
        
        <label htmlFor="description">Password</label> 
        <input type="text" name="description" id="description" />
              
        <input type="submit" value="Submit" />        
      </form>   
      
    </div>
  );
}

export default App;
