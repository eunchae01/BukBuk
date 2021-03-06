import React,{useState , useRef } from 'react';
import '../../css files/new-member-input.css';
import Adress from './Adress';
import '../../css files/font.css';
import Menu from '../navibar/Menu';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
function LogIn(){


  // 데이터를 넘겨주기 위한 상태
  const [ data ,setData] = useState(null)

  // 이미지 프로파일 변경상태
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const fileInput = useRef(null)



  // 프로파일 이미지 변경
  const onChangeProfileImage = (e) => {
    if(e.target.files[0]){
              setImage(e.target.files[0])
          }else{ //업로드 취소할 시
              setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
              return
          }
    //화면에 프로필 사진 표시
          const reader = new FileReader();
          reader.onload = () => {
              if(reader.readyState === 2){
                  setImage(reader.result)
              }
          }
          reader.readAsDataURL(e.target.files[0])
      }





  const [inputValue, setInputValue] = useState({
    mem_name: '',
    mem_id: '',
    mem_pwd: '',
    mem_phone: '',
    mem_addr: '',
  });



  const [checkBoxActive, setCheckBoxActive] = useState(false);

  const { mem_name, mem_id, mem_pwd, mem_phone, mem_addr } = inputValue;
  


  // 모든 input의 value가 1자 이상이 되어야 한다
  const isValidEmail = mem_id.includes('@') && mem_id.includes('.');
  const specialLetter = mem_pwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  const isValidPassword = mem_pwd.length >= 8 && specialLetter >= 1;
  const isValidPhone = mem_phone.includes('-') && mem_phone.length >= 13;
  const isValidInput = mem_name.length >= 1 && mem_phone.length >= 1 && mem_addr.length >= 1;
  const isCheckBoxClicked = () => {
      setCheckBoxActive(!checkBoxActive);
      console.log(checkBoxActive);
      
    };
  // 검사한 모든 로직의 유효성 검사가 true가 될때 getIsActive함수가 작동한다. 버튼 클릭 이벤트가 발생할때 넣어줄 함수.
  const getIsActive = 
     isValidEmail && isValidPassword && isValidInput && checkBoxActive && isValidPhone === true;
  


  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
    console.log(`${name} 의 값은 ${value} 입니다`)
  };



// let body = {params:{
//   mem_name : mem_name,
//   mem_pwd : mem_pwd,
//   mem_addr : mem_addr,
//   mem_phone: mem_phone,
//   mem_id: mem_id,
// }}

const history = useHistory();

let body ={params:{
  mem_name : mem_name,
  mem_pwd : mem_pwd,
  mem_addr : mem_addr,
  mem_phone: mem_phone,
  mem_id: mem_id,
  mem_profile: Image
}
} 


// 유효성 검사 중 하나라도 만족하지못할때 즉, 버튼이 비활성화 될 때 버튼을 클릭하면 아래와 같은 경고창이 뜬다.
const handleButtonValid = (e) => {
  e.preventDefault();
 if (!isValidInput){alert('칸을 다 채워주세요')}
 else if(!isValidEmail){alert('이메일 형식에 맞게 써주세요')}
 else if(!isValidPassword ){alert('비밀번호는 8자리 이상과 특수문자를 1개이상 포함 해주세요')}
 else if(!isValidPhone){alert('전화번호는 "-" 와 11자리 이상, 숫자로만 작성 해주세요')}
 else if(!checkBoxActive){alert('체크박스를 클릭 해주세요')}
 else{
  console.log('success')
  axios.post('http://localhost:8080/sign', null ,  body )
  .then(res=>
    setData(res.data)
  )
  .catch(alert("회원가입이 정상적으로 이루어지지 않았습니다"))
   if({data}===1){alert("회원가입이 완료되었습니다") ;
   history.push("/login")
   }
};
}
  // jsx코드
  
  return (
    <>
    <Menu/>
    <main className='signUp'>
      <form 
      className="signUpInput"
      onSubmit={handleButtonValid}
      >
            <div className='profileUpload'>
              <img src={Image}  onClick={()=>{fileInput.current.click()}} alt="프로파일 이미지"/>
              <input 
                type='file' 
                style={{display:'block'}}
                accept='image/jpg,impge/png,image/jpeg' 
                name='profile_img'
                onChange={onChangeProfileImage}
                ref={fileInput}
              />
            </div>
            <div className="nameInput">
              <div className="inputMessage">이름 *</div>
              <input
                className='input'
                name="mem_name"
                onChange={handleInput}
              />
            </div>
            <div className="emailInput">
              <div className="inputMessage">이메일(ID) *</div>
              <input
              className='input'
                name="mem_id"
                onChange={handleInput}
              />
            </div>
            <div className="passwordInput">
              <div className="inputMessage">비밀번호 *</div>
              <input
              className='input'
                type="password"
                name="mem_pwd"
                onChange={handleInput}
              />
            </div>
            <div className="phoneNumberInput">
              <div className="inputMessage">전화번호 *</div>
              <input
              className='input'
                name="mem_phone"
                onChange={handleInput}
              />
            </div>
            <div className="addressInput">
              <div className="inputMessage">주소 *</div>
              <div className='address'>
                <input
                  type='text'
                  className='input post'
                  placeholder='검색 버튼을 사용하세요'
                  name="address"
                  onChange={handleInput}
                  readOnly
                />
                <div className="search-address"><Adress/></div>
              </div>
              <input
                  type='text'
                  className='input road-address'
                  name="address"
                  onChange={handleInput}
                  placeholder='도로명 주소'
                  readOnly
                />
                <input
                type='text'
                className='input specific-address'
                name="mem_addr"
                onChange={handleInput}
                placeholder='상세주소'
                />
            </div>
            <div className="agreeCheckbox">
                <div className="accountCheckboxAgree">
                  <input             
                    type="checkbox"
                    className="checkbox"
                    onClick={isCheckBoxClicked}
                  />
                  <span className="checkboxContent">
                    나는 해당 안내문을 읽고
                    <span className="line">&nbsp;동의합니다</span>*
                  </span>
                </div>
                <div className="accountCheckboxAgree">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkboxContent">
                    본 사이트에서 제공해 드리는 안내문을 SMS 로 받길 원합니다
                  </span>
                </div>
                <span className="checkboxExplain">
                  * 는 필수
                </span>
              </div>
            <div className="signUpBotton">
              <button
                className={
                  getIsActive ? 'signUpButtonAction' : 'signUpButtonInaction'
                }
                type="submit"
                
              >
                BUKBUK의 회원되기
              </button>
            </div>
      </form>
      
    </main>
    </>
    )
  }


export default LogIn;