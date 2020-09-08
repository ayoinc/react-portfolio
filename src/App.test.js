import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import ReactDOM from 'react-dom';
import App from './App';

Sentry.init({
  dsn: "https://71e1519d2f384d80a0b80c01151ffa14@o352413.ingest.sentry.io/5421638",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
