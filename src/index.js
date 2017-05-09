import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import $ from 'jquery';
import {Router, Route, hashHistory, Link, IndexRoute, IndexLink} from 'react-router';
import Wikireducer from './wiki-page/WikiPage.reducer';
import WikiPage from './wiki-page/WikiPage';
import './index.css';

const reducer = Redux.combineReducers({
    wikiPage: Wikireducer
})

const store = Redux.createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

const HomePage = () =>
<div>
    <h2>Welcome to Wiki!</h2>
</div>

const AppLayout = ({children}) =>
<div>
    <div>{children}</div>

</div>

ReactDOM.render(
    <ReactRedux.Provider store = {store}>
        <Router history = {hashHistory}>
        <Route path="/" component={AppLayout}>
        <IndexRoute component={HomePage}/>
        </Route>
        </Router>
    </ReactRedux.Provider>,
  document.getElementById('root')
);
