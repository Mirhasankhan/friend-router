import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Nomatch from './Components/Nomatch/Nomatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>        
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/friend/:friendId" element={<FriendDetail/>}></Route>
          <Route path="/" element={<Home/>} exact />
          <Route path="*" element ={<Nomatch/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
