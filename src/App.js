import React, { Component } from 'react';
// 引入路由模块
import {Route,HashRouter,Switch,} from 'react-router-dom';

// 引入组件
import Login from "./view/login/Index"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={Login} exact path="/" />
        </Switch>
      </HashRouter>
    )
  }
}

// function App() {
//   return (
//     <div className="App">

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
