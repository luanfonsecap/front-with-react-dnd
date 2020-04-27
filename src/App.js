import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import GlobalStyle from './css/global';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />

      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
