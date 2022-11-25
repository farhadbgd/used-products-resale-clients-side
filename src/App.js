import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';


function App() {


  return (
    <div className='max-w-[1280px] mx-auto' style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>
      <RouterProvider router={router}></RouterProvider>

    </div>

  );
}

export default App;
