function App() {
  const name = "Vina";
  const course = "BCA";
  const topic = "React +JSX";
  const semester = 5;
  const goal = " Become a skilled frontend developer";

  return (
    <div>
      <h1>Student Profile</h1>

      <h2>{name}</h2>

      <p>Course: {course}</p>

      <p>Currently Learning: {topic}</p>

      <p>
        I am learning React +JSX to improve my frontend development skills.
      </p>

      <p>Semester: {semester}</p>
      <p>2 + 3 = {2 + 3}</p>
      <p>Goal: {goal}</p>

      <button>View Profile</button>
    </div>
  );
}

export default App;