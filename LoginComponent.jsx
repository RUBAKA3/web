import React, {  useState } from "react";
const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [obj, setObj] = useState({});

  const handlerEmail = (e) => {
    setLogin(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };


  const zapis = () => {
    if (login !== "") {
      let userFound = false;
      Object.keys(localStorage).map((e) => {
        if (e === login) {
          if (localStorage.getItem(e) === password) {
            userFound = true;
            alert(`Добро пожаловать ${login}!`);
          } else {
            alert("Пользователь найден. Пароль неверный");
            
          }
        }
      });
      if (!userFound) {
        alert("Пользователь не найден");
      }
    }
    setObj((prevObj) => ({
      ...prevObj,
      login: login,
      password: password
    }));
    setLogin(''); 
  setPassword(''); 
  };
  
  const onClose = () => {
    const modal = document.querySelector('.registr');
    modal.style.display = 'none';
  }
  

  

  return (
    <div>

      <div className="registr">
        <button style={{backgroundColor:"red"}} onClick={()=>{onClose()}}>Х</button>
        <input onChange={(e) => { handlerEmail(e) }} value={login} type="text" placeholder="login" />
        <input onChange={(e) => { handlerPassword(e) }} value={password} type="password" placeholder="password" />
        <button onClick={() => { zapis() }}>Войти</button>
      </div>

    </div>
  );
};

export default Login;