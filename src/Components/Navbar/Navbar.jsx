import './Navbar.scss'
import { BiLogoAdobe } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from 'react';
import logo from '../../Assets/logo.png'
const Navbar = () => {
  const [navBar, setNavBar] = useState('menu')

  const showNavBar = () => {
    setNavBar('menu showNavBar')
  }

  const removeNavBar = () => {
    setNavBar('menu')
  }

  return (
    <div className='navBar'>
      <div className="logoDiv">
        {/* <BiLogoAdobe  className='icon' />
        <span>G-Trips</span> */}
        <img src={logo} alt="" style={{width:'30px'}} />
        <span>Phúc Decor</span>
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">
            Trang Chủ
          </li>
          <li className="navList">
            Thông Tin
          </li>
          <li className="navList">
            Sản Phẩm
          </li>
          <li className="navList">
            Liên Hệ
          </li>
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar}/>
      </div>
      <button className="signInBtn btn">
        Đăng Nhập
      </button>
      <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
    </div>
  )
}

export default Navbar