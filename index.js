import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';
import createStore from './reducks/store/store';
import * as serviceWorker from './serviceWorker';
import {ErrorBoundary} from "./components/UIkit";
import {MuiThemeProvider} from '@material-ui/core/styles';
import App from './App';

import Draggable from './Hello';
import './style.css';

// connected-react-router - action経由でルーティングが可能、push,replace..
// historyを強化
const history = History.createBrowserHistory();
export const store = createStore(history);

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'),
)

render(<App />, document.getElementById('root'));
