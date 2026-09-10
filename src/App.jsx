import { useState } from "react";
import StudentInfo from "./studentInfo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !email || !course) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <div>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <br />

        <div>
          <label>Course:</label>

          <input
            type="text"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            placeholder="Enter your course"
          />
        </div>

        <br />

        <button type="submit">
          Register
        </button>
      </form>

      {submitted && (
        <div>
          <h2>Registration Successful!</h2>

          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Course: {course}</p>
        </div>
      )}

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