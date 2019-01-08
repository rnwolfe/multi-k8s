import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';


const footerStyle = {
  backgroundColor: "#282c34",
  fontSize: "14px",
  color: "white",
  borderTop: "1px solid #282c34",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header" style={{ 'minHeight': '5vh' }}>
            <h1>Welcome to Fib Calculator</h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
          <Footer>
            <span>There should be no downtime given kubernetes.</span>
            <br /><br />
            <span>This is a test app (version 2).</span>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
