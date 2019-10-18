import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import { style, classes } from './index.st.css';
import * as serviceWorker from './service-worker';

ReactDOM.render(<App className={style(classes.root)}/>, document.getElementById('root'));

// to use service worker, change to .register()
serviceWorker.unregister();
