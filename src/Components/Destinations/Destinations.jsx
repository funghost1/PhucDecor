import './Destinations.scss'
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import CaiRang from '../../Assets/cairang.jpg'
import SonDoong from '../../Assets/sondoong.jpg'
import SomRong from '../../Assets/chuasomrong.jpg'
import ThacBanGioc from '../../Assets/Thac-Ban-Gioc.jpg'
import GanhDaDia from '../../Assets/ganh-da-dia.jpg'
import PhuQuoc from '../../Assets/phuquoc.jpg'
import SongNhoQue from '../../Assets/song-nho-que.jpg'
import RungTaXua from '../../Assets/rungtaxua.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const destinations = [
  {
    id: 1,
    img: CaiRang,
    name: "Tủ đựng đồ",
    location: 'Hưng Phú',
    rating: 4.6
  },
  {
    id: 2,
    img: SonDoong,
    name: "Kệ sách",
    location: 'Hưng Phú',
    rating: 4.9
  },
  {
    id: 3,
    img: SomRong,
    name: "Tủ đựng giày",
    location: 'Hưng Phú',
    rating: 4.8
  },
  {
    id: 4,
    img: ThacBanGioc,
    name: "Tủ đồ cao",
    location: 'Hưng Phú',
    rating: 4.9
  },
  {
    id: 5,
    img: GanhDaDia,
    name: "Kệ sách",
    location: 'Hưng Phú',
    rating: 4.6
  },
  {
    id: 6,
    img: PhuQuoc,
    name: "Kệ tần",
    location: 'Hưng Phú',
    rating: 4.8
  },
  {
    id: 7,
    img: SongNhoQue,
    name: "Kệ sách mini",
    location: 'Hưng Phú',
    rating: 4.7
  },
  {
    id: 8,
    img: RungTaXua,
    name: "Giường gỗ công nghiệp",
    location: 'Hưng Phú',
    rating: 4.9
  }

]



const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTitle" data-aos="fade-up">
          <span className="redText" >
            Mua Ngay
          </span>
          <h3>
            Tìm Sản Phẩm Bạn Muốn
          </h3>
          <p>
            Liên Hệ Ngay: 0823712222
          </p>
        </div>

        {/* <div className="searchField grid" data-aos="fade-up">
          <div className="inputField flex">
            <MdLocationPin className='icon' />
            <input type="text" placeholder='Location' />
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className='icon' />
            <input type="text" placeholder='Budget' />
          </div>

          <div className="inputField flex">
            <BsCalendarDateFill className='icon' />
            <input type="text" placeholder='Date' />
          </div>

          <button className='btn flex'>
            <BiSearchAlt className='icon' />
            Search
          </button>
        </div> */}

        {/* <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div> */}

        <div className="destinationContainer grid" >
          {destinations.map(destination => {
            return (
              <div className="singleDestination">
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt="" />

                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">
                        {destination.name}
                      </span>
                      <p className='flex'>
                        <TiLocation className='icon' />
                        {destination.location}
                      </p>
                    </div>
                    <span className='rating'>
                      {destination.rating} <FaStar style={{ color: 'yellow' }} />
                    </span>

                  </div>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}

export default Destinations