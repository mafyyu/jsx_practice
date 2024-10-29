import './home.css';
import { useState } from 'react';
import { BrowserRouter as Router, Link ,Route,Routes} from 'react-router-dom';
import Id6page from './id6page';
import usersData from '../data/users.json';
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate();
  const handleClick =(id)=>{
    navigate(`/page${id}`);
  };
  return (
    <div>
        <h1 class="title">Introduction</h1>
        <div class="indivi">
            {usersData.map((user)=>(
            <div key={user.id} class="card">
                <a key={user.id} onClick={()=>{handleClick(user.id)}}>
                    <h1>{user.name}</h1>
                </a>
                <img
                src={user.imgUrl}
                style={{
                width:user.imgSize,
                height:user.imgSize
                }}>
                </img>
                <p class="comment">{user.comment}</p>
            </div>
            ))}
        </div>
    </div>
  );
}

export default App;
