import React from 'react';
import './App.css';
import { NewGoalModal } from './component/NewGoalsModal';
import { GoalsTable } from './component/GoalsTable';
import { AppContextProvider } from './context';

function App() {

  return <AppContextProvider>
    <div className='App'>
      <div className='AppContainer'>
        <h1>Трекер целей на неделю</h1>
        <GoalsTable />
        <NewGoalModal buttonLabel={'Добавьте цель'} />
      </div>
    </div>
  </AppContextProvider>
}

export default App;
