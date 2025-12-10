import logo from './logo.svg';
import './App.css';
import Student from './Components/Student';
import Counter from './Components/Counter';
import {ConditionalRendering, TerniaryCondition, AndOperator} from './Components/Conditional';
import {ListRendering, TodoList} from './Components/ListRendering';
import Form from './Components/Forms';
import {UseEffect, PostFetcher, UseEffectTimeInterval} from './Components/UseEffect';
import { Routes, Route, Router } from 'react-router-dom';
import RouteWelcome from './Components/RouteWelcome';
import Layout from './Components/Route/Layout';
import Record from './Components/Route/Record';
import UseNavigate from './Components/Route/UseNavigate';
import ThemeProvider from './Components/Context/ThemeProvider';
import InlineStyle from './Components/Styles/InlineStyle';
import StyleSheet from './Components/Styles/StyleSheet';
import ModuleStyle from './Components/Styles/ModuleStyle';
import StyledComponent from './Components/Styles/StyledComponent';
import FocusUser from './Components/UseRef/FocusUseref';
import TimeIntervalUseRef from './Components/UseRef/TimeIntervalUseRef';
import {GetRequestByFetch, GetRequestByAxios} from './Components/API/GetRequest';
import {PostRequestByFetch, PostRequestByAxios, 
  PutrequestByFetch, PatchRequestByFetch, DeleteRequestByFetch, PutrequestByAxios} from './Components/API/PostPutDel';
import UseMemo from './Components/Memoization/UseMemo';
import UseCallBack from './Components/Memoization/UseCallback';
import { lazy, Suspense } from 'react';
import { Link, useLocation  } from "react-router-dom";


function delayForDemo(promise) {
  return new Promise(resolve => { setTimeout(resolve, 2000)}).then(() => promise); 
}

const Home = lazy(()=> 
  delayForDemo(import('./Components/LazyLoad/Home')));
const DashBoard = lazy(()=> import('./Components/LazyLoad/DashBoard'));
const About = lazy(()=> import('./Components/LazyLoad/About'));

function App() {
  const studentData = {
    name: "Veera",
    age: "28",
    score: 85
  };
  let location = useLocation();
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
    {/* <ThemeProvider /> */}
    {/* <InlineStyle /> */}
    {/* <StyleSheet />
    <div className='container_app'>
       Hello
    </div> */}
    {/* <ModuleStyle /> */}
    {/* <StyledComponent /> */}
    {/* <FocusUser /> */}
    {/* <TimeIntervalUseRef /> */}
    {/* <GetRequestByAxios /> */}
    {/* <PostRequestByFetch /> */}
    {/* <PostRequestByAxios /> */}
    {/* <PutrequestByFetch /> */}
    {/* <PatchRequestByFetch /> */}
    {/* <DeleteRequestByFetch /> */}
    {/* <PutrequestByAxios /> */}
    {/* <UseMemo /> */}
    {/* <UseCallBack /> */}
    <Link to='/home'>Move to Home Page</Link><br />
    <Link to='/about'>Move to about Page</Link><br />
    <Link to='/dashboard'>Move to dashboard Page</Link><br />
    
    <Suspense fallback={<><h1>Loading components...</h1>Test..</>} key={location.key}>
      <Routes>
        <Route path='/home' element={<PostFetcher />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
