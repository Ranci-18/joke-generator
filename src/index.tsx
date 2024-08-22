import React from 'react';
import { createRoot } from 'react-dom/client';
import './sass/index.sass';

const App: React.FC = () => {
    return (
        <div>
            <h1>Joke Generator</h1>
        </div>
    )
}

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(<App />);
}
