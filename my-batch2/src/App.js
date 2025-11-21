import logo from './logo.svg';
import './App.css';
import Student from './Components/Student';

function App() {
  const studentData = {
    name: "Veera",
    age: "28",
    score: 85
  };
  return (
    <>
    <Student studentData={studentData} />
    </>
  );
}

export default App;
