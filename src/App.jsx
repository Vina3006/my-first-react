function App() {
  const name = "Vina Shinde";
  const course = "BCA";
  const year ="final year";
  const college ="D.R.Mane Mahavidyalaya, Kagal";
  const topic = "React +JSX";
  const semester = 5;
  const age = 20;
  const goal = " Become a skilled frontend developer";
  const isLearningReact = true;

  return (
    <div>
      <h1>Student Profile</h1>

      <h2>My self: {name}</h2>

      <p>Course: {course}</p>

      <p>Currently Learning: {topic}</p>

      <p>
        I am learning React +JSX to improve my frontend development skills.
      </p>

      <p>Semester: {semester}</p>
      <p>Year: {year}</p>
      <p>Age: {age}</p>
      <p>College: {college}</p>
      <p>2 + 3 = {2 + 3}</p>
      <p>Goal: {goal}</p>
      {isLearningReact && (<p>I am currently learning React with JSX</p>)}

      <button classname="profile-button">View Profile</button>
    </div>
  );
}

export default App;