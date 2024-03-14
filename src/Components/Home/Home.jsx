import './Home.scss'
import videoBg from '../../Assets/video.mp4'
import { AiOutlineSwapRight } from "react-icons/ai";
import HaLong from "../../Assets/vinh-ha-long.jpg"
import ConDao from "../../Assets/Con-Dao.jpg"
import MuCangChai from "../../Assets/mucangchai.jpg"
import TrangAn from "../../Assets/Trang-An.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='Home'>
      <div className="videoBg">
        <video src={videoBg} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos= 'fade-up'>Phúc Decor</h1>
        <p data-aos= 'fade-up'>
         Nội thất cho mọi nhà <br />
          0779930086 - 0823712222

        </p>
        <button className='btn' data-aos= 'fade-up'>
          Mua Ngay <AiOutlineSwapRight className='icon' />
        </button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos= 'fade-up'>Sản Phẩm Hot &emsp;</h3>
          <div className="images flex" data-aos= 'fade-up'>
            <img src={HaLong} alt="" />
            <img src={ConDao} alt="" />
            <img src={MuCangChai} alt="" />
            <img src={TrangAn} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home