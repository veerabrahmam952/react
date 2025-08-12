import logo from './logo.svg';
import './App.css';
import Welcome from './welcome.jsx';
import Student from './Student.js';
import Counter from './Counter.js';
import { UserStatus, UserStatusTernary, UserStatusLogicalAnd } from './UserStatus.js';
import Products from './Products.js';
import {UserForm, SingleForm} from './components/UserForm.js';

function App() {
  const products = [
    {name: 'Samsung', price: 25000, description: 'Mobile', id: 1}, 
    {name: 'MI', price: 15000, description: 'Mobile', id: 2},
    {name: 'Dell', price: 60000, description: 'Laptop', id: 3},
    {name: 'HP', price: 70000, description: 'Laptop', id: 4},
  ]
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Student name="Harini" classText="React" grade="A" counter="0"/> */}
      {/* <header className="App-header">
        <Welcome />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <UserStatus isLoggedIn={false}/> */}
      {/* <UserStatusTernary isLoggedIn={false}/> */}
      {/* <UserStatusLogicalAnd isLoggedIn={true}/> */}
      {/* {products.length > 0 ? <Products products={products}/>: <p>No products available</p>} */}
      <SingleForm />
    </div>
  );
}

export default App;
