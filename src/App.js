import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sample React</h1>
        <h2>
          <a className="App-link" href="." onClick={Auth.signOut}>
            Sign Out
          </a>
        </h2>
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
      </header>
    </div>
  );
}

export default withAuthenticator(App);
