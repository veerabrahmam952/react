import logo from './logo.svg';
import './App.css';
import Student from './Components/Student';
import Counter from './Components/Counter';
import {ConditionalRendering, TerniaryCondition, AndOperator} from './Components/Conditional';
import {ListRendering, TodoList} from './Components/ListRendering';
import Form from './Components/Forms';
import {UseEffect, PostFetcher, UseEffectTimeInterval} from './Components/UseEffect';
import { Routes, Route } from 'react-router-dom';
import RouteWelcome from './Components/RouteWelcome';
import Layout from './Components/Route/Layout';
import Record from './Components/Route/Record';
import UseNavigate from './Components/Route/UseNavigate';
import ThemeProvider from './Components/Context/ThemeProvider';

function App() {
  const studentData = {
    name: "Veera",
    age: "28",
    score: 85
  };
  return (
    <>
    {/* <Student studentData={studentData} /> */}
    {/* <Counter /> */}
    {/* <ConditionalRendering isLoggedIn={'ADMIN'}/>
    <ConditionalRendering isLoggedIn={''}/> */}
    {/* <TerniaryCondition isLoggedIn={'ADMIN'}/>
    <TerniaryCondition isLoggedIn={''}/> */}
    {/* <AndOperator isLoggedIn={'ADMIN'}/>
    <AndOperator isLoggedIn={''}/> */}
    {/* <ListRendering /> */}
    {/* <TodoList /> */}
    {/* <Form /> */}
    {/* <UseEffect /> */}
    {/* <PostFetcher />
    <UseEffectTimeInterval /> */}
    {/* <Routes>
      <Route index Component={RouteWelcome}></Route>
      <Route path='/counter' Component={Counter}></Route>
    </Routes> */}
    {/* <Routes>
      <Route path='/' Component={Layout}>
        <Route index Component={RouteWelcome}></Route>
        <Route path='/counter' Component={Counter}></Route>
        <Route path='/record/:id' Component={Record}></Route>
        <Route path='/usenavigate' Component={UseNavigate}></Route>
      </Route>
    </Routes> */}
    <ThemeProvider />
    </>
  );
}

export default App;
