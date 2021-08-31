import React from 'react';
import './App.css';

//Hello component used inside App component
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

//React component with name App
const App = () => {
  console.log('Hello from component');

  const name = 'Peter';
  const age = 10;

  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Bernice" age="26"/>
    <Hello name={name} age={age}/>
  </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
