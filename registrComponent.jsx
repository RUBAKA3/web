import React, {useState} from "react";

const Registr =() =>{
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState("")
  const [obj, setObj] = useState({});
  

  const handlerEmail = (e) => {
    setLogin(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handlerrePassword = (e) => {
    setRepassword(e.target.value);
  };


  const avtor = () => {
    setObj((prevObj) => ({
      ...prevObj,
      login: login,
      password: password,
      repassword: repassword
    }));
    prover(password,repassword)
    setLogin(''); 
  setPassword(''); 
  setRepassword('');
}
const prover =()=>{
  if(login.length>3){
    if(!(/^.*[0-9].*/).exec(password)){
      alert("Добавьте цифру в ваш пароль")
    }
    else{
      if(!(/^.*[A-ZА-Я].*/).exec(password)){
        alert("Добавьте заглавную букву в ваш пароль")
      }else{
        if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password))) {
          alert("Добавьте цифру и спец символ в ваш пароль");
        }else{ 
          if(password===repassword){
            localStorage.setItem(login, password)
            alert("Пользователь добавлен")
           
            }else(alert("Пароли не совпадают"))
        }
      }
    }}else(alert("Имя пользователя слишком маленькое"))
    
}
const onClose = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }

    return(
        <div >

      <div className="modal">
        <button style={{backgroundColor:"red"}} onClick={()=>{onClose()}}>Х</button>
        <input  onChange={(e) => { handlerEmail(e)}}  type="text" placeholder="login" />
        <input  onChange={(e) => { handlerPassword(e) }} value={password} type="password" placeholder="Придумайте пароль" />
        <input  onChange={(e) => { handlerrePassword(e) }} value={repassword} type="password" placeholder="Повторите пароль" />
        <button onClick={() => {avtor()}}>Зарегистрироваться</button>
      </div>

    </div>
    )
}
export default Registr