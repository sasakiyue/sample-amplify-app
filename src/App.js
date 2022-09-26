import "./App.css";
import { Auth, DataStore } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import {
  Header,
  BoardComponentCollection,
  PersonComponentCollection,
  BoardComponent,
} from "./ui-components";
import { useState, useEffect } from "react";
import { Board } from "./models";

const content2 = <PersonComponentCollection />;
const content3 = <p>タブ3のコンテンツ</p>;
const content4 = <p>タブ4のコンテンツ</p>;

function App() {
  const [content1, setContent1] = useState("");
  const [input, setInput] = useState("");
  const [find, setFind] = useState(input);

  const doChange = (event) => {
    setInput(event.target.value);
  };
  const doFilter = (event) => {
    setFind(input);
  };
  useEffect(() => {
    DataStore.query(Board, (ob) => ob.message("contains", find)).then(
      (values) => {
        const data = [];
        for (let item of values) {
          data.push(<BoardComponent board={item} key={item.id} />);
        }
        setContent1(
          <div>
            <div className="mx-0 my-3 row">
              <input
                type="text"
                className="form-control col"
                onChange={doChange}
              />
              <button className="btn btn-primary col-2" onClick={doFilter}>
                Click
              </button>
            </div>
            {data}
          </div>
        );
      }
    );
  }, [input, find]);

  return (
    <div>
      <Header className="my-4" />
      <p>これはUIコンポーネントを使用した表示です</p>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="#tab1" className="nav-link active" data-bs-toggle="tab">
            List
          </a>
        </li>
        <li className="nav-item">
          <a href="#tab2" className="nav-link" data-bs-toggle="tab">
            Create
          </a>
        </li>
        <li className="nav-item">
          <a href="#tab3" className="nav-link" data-bs-toggle="tab">
            Update
          </a>
        </li>
        <li className="nav-item">
          <a href="#tab4" className="nav-link" data-bs-toggle="tab">
            Detele
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="tab1" className="my-2 tab-pane active">
          {content1}
        </div>
        <div id="tab2" className="my-2 tab-pane">
          {content2}
        </div>
        <div id="tab3" className="my-2 tab-pane">
          {content3}
        </div>
        <div id="tab4" className="my-2 tab-pane">
          {content4}
        </div>
      </div>
      <p className="my-2">
        <a className="btn btn-primary" href="." onClick={Auth.signOut}>
          sign out
        </a>
      </p>
    </div>
  );
}

export default withAuthenticator(App);

/*function onClick() {
  alert("クリックした");
}*/

/*
function Message(props) {
  let first = null;
  let data = null;
  if (Array.isArray(props.children)) {
    first = props.children[0];
    data = props.children.slice(1, props.children.length);
  } else {
    first = props.children;
    data = [<p>no data</p>];
  }
  return (
    <div className="alert alert-primary">
      <ul className="list-group">
        <div className="text-center">{first}</div>
        {data.map((value) => (
          <li className="list-group-item">{value}</li>
        ))}
      </ul>
    </div>
  );
}
*/

/*
      <Message>
        <p>タイトルです</p>
        <p>これはサンプルでつくったメッセージです</p>
        <p>これはコンテンツのテキストです</p>
      </Message>
*/

/*
function AlertMessage(props) {
  return (
    <div className="alert alert-primary">
      <h3>{props.title}</h3>
      {props.msg}
    </div>
  );
}

function BoxMessage(props) {
  return (
    <div className="card">
      <div className="card-header">{props.title}</div>
      <div className="card-body">{props.msg}</div>
    </div>
  );
}
*/

/*
function Hello(props) {
  return <div className={"alert alert-" + props.type}>{props.message}</div>;
}
*/

/*function Now() {
  return (
    <p className="bg-secondary text-dark bg-opacity-25 p-3 my-3">
      現在は、{new Date().getHours()}時です。
    </p>
  );
}
*/

/*
  const data = [
    ["おやすみ、", "..."],
    ["おはよう、", "！"],
    ["こんにちは、", "さん。"],
    ["こんばんは、", "さん。"],
  ];
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState(input);
  const [msgs, setMsgs] = useState(msg);

  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onClick = () => {
    setMsg(input);
  };
  useEffect(() => {
    if (msg == "") {
      setMsgs("no message");
    } else {
      const h = Math.floor(new Date().getHours() / 6);
      setMsgs(data[h][0] + msg + data[h][1]);
    }
  }, [msg]);

  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p className="border border-primary p-3 my-3">
        これはUIコンポーネントを使用した表示です
      </p>
      <div className="mx-0 my-3 row">
        <input type="text" className="form-control col" onChange={onChange} />
        <button className="btn btn-primary col-2" onClick={onClick}>
          Click
        </button>
      </div>
      <Hello message={msgs} type="primary" />
    </div>
  );

<div className="alert alert-primarty">Count: {count}.</div>
<button className="btn btn-primary" onClick={onClick}>
  Click me
</button>
<Hello message="サンプルのメッセージです" type="primary" />
<Hello message="表示のタイプも変更できます" type="dark" />

  const [flag, setFlag] = useState(false);
  const onChange = (event) => {
    setFlag(event.target.checked);
  };
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="check1"
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="check1">
          表示の切り替えチェックボックス
        </label>
      </div>
      <hr />
      {flag ? (
        <AlertMessage
          title="チェックはON!"
          msg="チェックONのメッセージです！！"
        />
      ) : (
        <BoxMessage
          title="チェックはOFF"
          msg="チェックOFFのメッセージです！！"
        />
      )}
*/
