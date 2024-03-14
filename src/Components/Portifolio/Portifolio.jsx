import safety_and_support from '../../Assets/safety_and_support.png'
import Diverse_Range_of_Destinations from '../../Assets/Diverse_Range_of_Destinations.png'
import customer247 from '../../Assets/247.png'
import image from '../../Assets/gridImage.jpg'
import './Portifolio.scss'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Portifolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='portifolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Tại Sao Bạn Chọn Chúng Tôi?</h3>
            <p data-aos="fade-up">
              Lấy chất lượng sản phẩm lên hàng đầu, mẫu mã đẹp và theo xu hướng hiện nay. Chăm sóc khách hàng tận tình.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={safety_and_support} alt="" />
              </div>

              <div className="info"  data-aos="fade-up">
                <h4 >Chi Tiết</h4>
                <p>
                 Khánh hàng có thể liên hệ chúng tôi qua các kênh truyền thông hoặc SĐT để được hướng dẫn và chọn 
                 mẫu phù hợp cho mình
                 <br />
                 Sản phẩm ship toàn quốc
                </p>
              </div>

            </div>

            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={Diverse_Range_of_Destinations} alt="" />
              </div>

              <div className="info">
                <h4>Địa Chỉ</h4>
                <p>
                  Ấp Phương An 1 , Hưng Phú , Mỹ Tú, Sóc Trăng
                  <br />
                  (gần nhà thờ Thánh Tâm)
                </p>
              </div>

            </div>

            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={customer247} alt="" />
              </div>

              <div className="info">
                <h4>Thông Tin Liên Hệ</h4>
                <p>
                  STĐ 0823712222 (Khoa) <br />
                  STĐ 0779930086 (Phúc) <br />
                  Email: hongocquynhanh333@gmail.com
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="rightContent" data-aos="fade-down">
          <img src={image} alt="" style={{ borderRadius: '20px' }} />
        </div>
      </div>
    </div>
  )
}

export default Portifolio