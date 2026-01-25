import React from "react";

const App = () => {
  const students = [
    {
      id: 1,
      name: "Ayaan Khan",
      age: 20,
      course: "Computer Science",
      grade: "A",
      city: "Hyderabad",
    },
    {
      id: 2,
      name: "Riya Sharma",
      age: 21,
      course: "Information Technology",
      grade: "B+",
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Arjun Patel",
      age: 19,
      course: "Mechanical Engineering",
      grade: "A-",
      city: "Ahmedabad",
    },
    {
      id: 4,
      name: "Neha Verma",
      age: 22,
      course: "Electronics",
      grade: "B",
      city: "Delhi",
    },
    {
      id: 5,
      name: "Zaid Ali",
      age: 20,
      course: "Data Science",
      grade: "A+",
      city: "Bangalore",
    },
  ];

  return (
    <div>
      {students.map((student) => (
        <ul key={student.id}>
          <li>{student.id}</li>
          <li>{student.name}</li>
          <li>{student.age}</li>
          <li>{student.course}</li>
          <li>{student.grade}</li>
          <li>{student.city}</li>
        </ul>
      ))}
      ;
    </div>
  );
};

export default App;
