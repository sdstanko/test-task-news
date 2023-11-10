import { Container } from '@mui/system';
import React from 'react';
import './App.css';
import NewsList from './components/ItemList/NewsList';

function App() {
    return (
        <div className="App">
            <Container>
                <NewsList />
            </Container>
        </div>
    );
}

export default App;
