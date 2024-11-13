import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search';
import Cardbox from './components/Cardbox';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');
  
  const handleData=(inputData)=>{
    let url="https://www.themealdb.com/api/json/v1/1/search.php?s="+inputData;
    console.log(url);
    fetch(url).then(res=>res.json()).then(data=>{
      // console.log(data.meals);
      setData(data.meals);
      return data.meals;
      
    })
  }

  return (
    <>
      <div>
        <Search data={handleData} items={data}/>
        <Cardbox data={data}/>
      </div>
    </>
  )
}

export default App
