// Esse é o arquivo que inicia a aplicação

import React from 'react';
// Chama funções para executar o JSX

import ReactDOM from 'react-dom';
// Manipula o DOM && é usado apenas uma vez na aplicação

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
