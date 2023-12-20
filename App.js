import React, { Fragment, useRef, useState } from "react";
import "./App.css"
import Login from "./LoginComponent";
import Registr from "./registrComponent";

// import Login from "./LoginComponent";

function App() {
 
    

  let onClose = () => {
    let modal = document.querySelector(".modal")
    let registr = document.querySelector('.registr');
    if(registr.style.display === 'none') {registr.style.display = 'flex'; modal.style.display='none'} else{registr.style.display = 'none'}
  };
  
  let avtor = () => {
    let modal = document.querySelector(".modal")
    let registr = document.querySelector('.registr');
    if(modal.style.display === 'none') {modal.style.display = 'flex'; registr.style.display='none'} else{modal.style.display = 'none'}
  };

  
  
  return (
    <div className="App">
      <button onClick={avtor}>Регистрация</button> {/* убраны лишние вызовы функций из атрибута onClick */}
      <button onClick={onClose}>Авторизация</button>
      <div style={{display:"flex", width:"100%", height:"90vh", justifyContent:"center", alignItems: "center" }}>
        <Login className="modal"/> <Registr className="registr"/>
      </div>
      
      
      {/* <p >{posts.target}</p>
      <input value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
      <input ref={op} value={body} onChange={(e)=>{setBody(e.target.value)}}></input>
      <button onClick={(e)=>{
        e.preventDefault()
        const newPost={
          id:Date.now(),
        title, body
      }
      setPosts([...posts,newPost])
      console.log(newPost)
      setBody("")
      setTitle("")
      }}>Добаувить задачу</button>
      <Counter posts={posts}/> */}
    </div>
  );
}

export default App;
