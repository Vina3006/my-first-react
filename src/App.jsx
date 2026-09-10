import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      name: "Vina",
      course: "BCA",
      year: 3
    },
    {
      id: 2,
      name: "Rahul",
      course: "BBA",
      year: 2
    },
    {
      id: 3,
      name: "Priya",
      course: "BCA",
      year: 3
    },
    {
      id: 4,
      name: "Amit",
      course: "BCA",
      year: 2
    },
    {
      id: 5,
      name: "Sneha",
      course: "BBA",
      year: 3
    }
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Student search</h1>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search student..."
      />

      <h2>Students</h2>

      {filteredStudents.length > 0 ? (
        <div>
          {filteredStudents.map((student) => (
            <div key={student.id}>
              <h3>{student.name}</h3>
              <p>Course: {student.course}</p>
              <p>Year: {student.year}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}

export default App;