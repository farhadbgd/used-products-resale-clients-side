import './App.css';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const tostHandler = () => {
    toast.success('hello world')
  }
  return (
    <div className="App">
      <button onClick={tostHandler} className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
    </div>
  );
}

export default App;
