import StudentInfo from "./studentInfo";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
    
   return (
    <div>
      <h1>My React learning profile</h1>
      <StudentInfo 
      name="Vina Shinde" 
      course="BCA" 
      year={3}
      college="my college"
       />
       <h2>Counter:{count}</h2>

       <button onClick={() => setCount(count + 1) }>Increment</button> <br  />
       <button onClick={() => setCount(count - 1) }>Decrement</button> <br />
       <button onClick={() => setCount(0) }>Reset</button>
    </div>
  );

};
export default App;