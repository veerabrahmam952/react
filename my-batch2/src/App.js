import logo from './logo.svg';
import './App.css';
import Student from './Components/Student';
import Counter from './Components/Counter';
import {ConditionalRendering, TerniaryCondition, AndOperator} from './Components/Conditional';
import {ListRendering, TodoList} from './Components/ListRendering';
import Form from './Components/Forms';
import {UseEffect, PostFetcher, UseEffectTimeInterval} from './Components/UseEffect';

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
    <PostFetcher />
    <UseEffectTimeInterval />
    </>
  );
}

export default App;
