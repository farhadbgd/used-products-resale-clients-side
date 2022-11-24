import './App.css';
import { RouterProvider } from 'react-router-dom';
import Footer from './Shared/Footer';
import router from './Routes/Router';


function App() {


  return (
    <div className='max-w-[1280px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>

    </div>

  );
}

export default App;
