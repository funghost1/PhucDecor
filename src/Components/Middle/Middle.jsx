import './Middle.scss'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Middle = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='middle section'>
      <div className="secContainer container">
        <div className="grid" data-aos= 'fade-up'>
          <span className='flex' >
            <h1>100+</h1>
            <p>Sản Phẩm</p>
          </span>
          <span className='flex'>
            <h1>63</h1>
            <p>Tình thành</p>
          </span>
          <span className='flex'>
            <h1>1000+</h1>
            <p>Người dùng</p>
          </span>
          <span className='flex'>
            <h1>5⭐</h1>
            <p>Chất lượng</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Middle