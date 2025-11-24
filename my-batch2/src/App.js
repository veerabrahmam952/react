import logo from './logo.svg';
import './App.css';
import Student from './Components/Student';
import Counter from './Components/Counter';

function App() {
  const studentData = {
    name: "Veera",
    age: "28",
    score: 85
  };
  return (
    <>
    {/* <Student studentData={studentData} /> */}
    <Counter />
    </>
  );
}

export default App;
