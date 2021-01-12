import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "e46c2b3a95844bc2a20b58c973bdd8c3"}'></script><!-- End Cloudflare Web Analytics -->

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

