function StudentInfo({ name, course, year, college }) {
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Year: {year}</p>
      <p>College:{college}</p>
    </div>
  );
}

export default StudentInfo;