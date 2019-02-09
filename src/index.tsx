import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// @ts-ignore
ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
