import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { useState } from 'react';
function App() {
  const [categories,setCategories]=useState('general');
  return (
    <div className="">
      <NavBar setCategories={setCategories}/>
      <News categories={categories}/>
      
    </div>
  );
}

export default App;
