import logo from './logo.svg';
import './App.css';
import Router from './Routing/route';
import { COURSESURL } from './Components/Confidential';
import { createContext, useState } from 'react';
export const Globalprovider=createContext()
function App() {
  const [login, setlogin] = useState()
function Islogin(){
let item=localStorage.getItem('COURSES_USER_TOKEN')
if(item){
  setlogin(true)
}
else{
  setlogin(false)
}
}
  return (
    <Globalprovider.Provider value={{Islogin,login}}>
    <div className=' 2xl:px-[15%] overflow-x-hidden'>
   <Router/>
   </div>
   </Globalprovider.Provider>
  );
}

export default App;
