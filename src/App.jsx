import React, { Component } from 'react';
import reactLogo from './assets/react.svg';
import LoginPanel from './components/login-panel/login-panel';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Signup from './components/sign-up-panel/sign-up-panel';
import HomePage from './components/homePage/homePage';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sideBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    
  }

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }

  // componentDidMount() {
  //   this.callAPI();
  // }

  

  render() {
    return (

      <div>


        {/* <h1>API Response:</h1>
        <p>{this.state.apiResponse}</p>
        <LoginPanel />
         */}
         <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/signup" element={<Signup /> }/>
        <Route path="/homepage" element = {<HomePage /> }>
            <Route path="employees" element = {<Content/>}/>
        
        </Route>
        </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;



{/* <div>
        <a href="https://www.linkedin.com/feed/" target="_blank">
          <img src="../public\undraw_drink_coffee_v3au.svg" className="logo" alt="my logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>LinkedIn + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         <h4>hello world</h4> 
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}