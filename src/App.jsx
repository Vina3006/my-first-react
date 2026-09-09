import StudentInfo from "./studentInfo";
function App() {
  return (
    <div>
      <h1>My React learning profile</h1>
      <StudentInfo 
      name="Vina Shinde" 
      course="BCA" 
      year={3}
      college="my college"
       />
    </div>
  );
}

export default App;