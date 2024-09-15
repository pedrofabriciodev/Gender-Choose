import { useEffect } from 'react';
import { SQLiteProvider } from 'expo-sqlite';
import Navigation from './src/routes/routesMain.routes';

import { initializeDatabase } from './src/database/initializeDatabase';

const App = () => {
//   useEffect(() => {
//     initializeDatabase();
// }, []);
  
  return (
      <Navigation />  
      
  )
};

export default App;