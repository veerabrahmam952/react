// import logo from './logo.svg';
import './App.css';
// import Welcome from './welcome.jsx';
import Student from './Student.js';
import Counter from './Counter.js';
// import { UserStatus, UserStatusTernary, UserStatusLogicalAnd } from './UserStatus.js';
// import Products from './Products.js';
// import {UserForm, SingleForm} from './components/UserForm.js';
// import {Effect, PostFetcher} from './components/Effect.js';
import WelcomeNew from './components/Welcome.js';
import MainLayout from './components/MainLayout.js';
import { Router, Routes, Route } from 'react-router-dom';
import { SingleForm } from './components/UserForm.js';
// import ThemeProvider from './components/ThemeProvider.js';
// import ThemedComponent from './components/ThemedComponent.js';
// import UserComponent from './components/UserComponent.js';
// import {StylingComponent, InlineStylingComponent} from './components/StylingComponent.js';
// import StylingModuleComponent  from './components/StyleComponents/StylingModule.js';
// import StyleTaggedComponent from './components/StyleComponents/StyleTaggedComponent.js';
// import InputFocusWithButton from './components/UseRef/InputFocusWithButton.js';
import RefCounter from './components/UseRef/RefCounter.js';

function App() {
  const products = [
    {name: 'Samsung', price: 25000, description: 'Mobile', id: 1}, 
    {name: 'MI', price: 15000, description: 'Mobile', id: 2},
    {name: 'Dell', price: 60000, description: 'Laptop', id: 3},
    {name: 'HP', price: 70000, description: 'Laptop', id: 4},
  ]
  return (
    <>
    {/* <div className="container">Hi</div> */}
    {/* <StylingComponent />
    <InlineStylingComponent /> */}
    {/* <StylingModuleComponent /> */}
    {/* <StyleTaggedComponent /> */}
    {/* <InputFocusWithButton /> */}
    <RefCounter />
    </>
    
    // <ThemeProvider>
    //    <ThemedComponent />
    //    <UserComponent />
    // </ThemeProvider>
      // <Routes>
      //   <Route path="/" element={<MainLayout />}>
      //    {<Route path='/welcome' element={<WelcomeNew />} />}
      //    {<Route path="/student/*" element={<Student name="Harini" classText="React" grade="A" counter="0"/>} />}
      //    {<Route path="/form/*" element={<SingleForm/>} />}
      //   </Route>
      // </Routes>
    // <Routes>
    //   <Route path="/" element={<WelcomeNew />} />
    //   <Route path="/member" element={<Student name="Harini" classText="React" grade="A" counter="0"/>} />
    //   <Route path="/counter" element={<Counter />} />
    // </Routes>
   
  );
}

export default App;
