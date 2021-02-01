import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Helmet} from 'react-helmet';



	render() {
	  return (
	  	<div className="application">
		  <Helmet>
		  	<meta charset="utf-8" />
		  	<title>CloudFlare</title>
		  	<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "e46c2b3a95844bc2a20b58c973bdd8c3"}'></script>
		  </Helmet>
		</div>
	  );
	}


ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

