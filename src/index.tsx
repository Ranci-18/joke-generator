import React from 'react';
import { createRoot } from 'react-dom/client';
import './sass/index.sass';
import GetRandomJoke from './components/GetRandomJoke';

const App: React.FC = () => {
    return (
        <div id='app'>
            <h1>Joke Generator with React and TypeScript</h1>
            <GetRandomJoke />
        </div>
    )
}

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(<App />);
}
