import React, { useEffect, useState } from 'react'

const User = {
  email: 'exam@naver.com',
  pw: 'test2323@@@'
}

export default function 
() {
  const [email, setEmail] =useState('');
  const [pw, setPw] =useState('');
  const [emailValid, setEmailValid] = useState(false)
  const [pwValid, setPwValid] = useState(false)
  const [notAllow, setNotAllow] = useState(true);
 
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = 
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(regex.test(email)){
      setEmailValid(true);
    }else{
      setEmailValid(false)
    }
  }
    const handlePassword = (e)=>{
      setPw(e.target.value);
      const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if(regex.test(pw)){
      setPwValid(true);
    }else{
      setPwValid(false)
    }
    }
    
    const onClickconfirmButton = () =>{
      if(email === User.email && pw === User.pw){
        alert('로그인에 성공했습니다.')
      }else{
        alert('등록되지 않은 회원입니다. ')
      }
    }

      // 만약 이메일, 비밀번호 state가 조건에 맞으면 활성화시키고, 기본적으로 비활성화
      useEffect(()=>{
        if(emailValid && pwValid){
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
      },[emailValid,pwValid])
  
  return (
    <div className='page'>
      <div className='titleWrap'>
        이메일과 비밀번호를
        <br/>
        입력해주세요
      </div>

      <div className='contentWrap'>
      <div className='inputTitle'>이메일주소</div>
      <div className='inputWrap'>
        <input
         type='text'
         className='input'
         placeholder='test@gmail.com'
         value={email}
        //  사용자가 입력하는 값을 계속 가져와서 email state에다가 값을 변경하는 것이다
         onChange={handleEmail}
         />
         
      </div>
      <div className='errorMessageWrap'>
        {
          !emailValid && email.length > 0 &&(
            <div>올바른 이메일을 입력해주세요</div>
          )
        }
      </div>
      
      <div className='inputTitle' style={{marginTop:"26px"}}>비밀번호</div>
      <div className='inputWrap'>
        <input 
        type='password'
        className='input' 
        placeholder='영문, 숫자, 특수문자 포함 8자리 이상'   
        value={pw}
        onChange={handlePassword}
       />
      </div>
      <div className='errorMessageWrap'>
      {
        !pwValid && pw.length > 0 && (
          <div>  영문, 숫자, 특수문자 포함 8자이상 입력해주세요</div>
        )}
      </div>
      </div>

      <div>
        <button onClick={onClickconfirmButton} disabled={notAllow} className='bottomButton'>
          확인
        </button>
      </div>
    </div>
  )
}
