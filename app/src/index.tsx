import React from 'react';
import ReactDOM from 'react-dom';
import SurveyDesignRouter from './router';
import { Provider } from 'react-redux';
import { store } from './store/rootStore';

ReactDOM.render(
  <Provider store={store}>
    <SurveyDesignRouter />
  </Provider>,
  document.getElementById('root')
);
