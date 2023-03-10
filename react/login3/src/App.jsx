import styled from 'styled-components'
import { SiNaver } from "react-icons/si"
import { RiKakaoTalkFill } from "react-icons/ri";
import Input from './components/Input'
import Button from './components/Button';
import Icon from './components/Icon'


function App() {
  const NaverBackground = "linear-gradient(to right, #19ce60 0%, #19ce60 40%, #19ce60 100%)";
  const KakaoBackground = "linear-gradient(to right, #F7E600 0%, #F7E600 40%, #F7E600 100%)"
  
  return (
  <MainContainer>
    <WelcomeText>Welcome</WelcomeText>
    <InputContainer>
    <Input type="text" placeholder="Email"/>
    <Input type="password" placeholder="password"/>
    </InputContainer>
    <ButtonContainer>
      <Button content="sign up"/>
    </ButtonContainer>
    <LoginWith>Or 간편로그인</LoginWith>
    <HorizontalRule/>
    <IconsContainer>
        <Icon color={NaverBackground}>
          <SiNaver/> 
        </Icon> 
        <Icon color={KakaoBackground}>
          <RiKakaoTalkFill/> 
        </Icon> 
    </IconsContainer>
    <ForgotPassword>비밀번호를 잊어버리셨나요 ?</ForgotPassword>
  </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width:320px){
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4{
      font-size: small;
    }
  }
  @media only screen and (max-width:360px){
    width: 80vw;
    height: 90vh;
  
    h4{
      font-size: small;
    }
  }
  @media only screen and (max-width:411px){
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (max-width:768px){
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (max-width:1024px){
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (max-width:1280px){
    width: 30vw;
    height: 80vh;
  }
  `
  
const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

  const LoginWith = styled.h5`
  cursor: pointer;
  `;

  // 선 만들기
  const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    margin: 1.5em 0 1rem 0;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%) ;
    backdrop-filter: blur(25px);
  `;

  const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 3rem 0;
    width: 80%;
  `;

  const ForgotPassword = styled.h4`
    cursor: pointer;
  `;

export default App;
