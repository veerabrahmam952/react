import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route index element={<DashBoard />}></Route>
    </Routes>
    </>
  );
}

export default App;
