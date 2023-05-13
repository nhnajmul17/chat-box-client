import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';

function App() {
  return (
    <RouterProvider router={router}>
      <div className='App'>
      </div>
    </RouterProvider>
  );
}

export default App;
