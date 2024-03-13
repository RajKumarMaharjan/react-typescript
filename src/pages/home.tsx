import { Link } from 'react-router-dom';
import DroneImg from '../assets/images/Drone1.png';
import StoreGrid from '../component/Store/StoreGrid';
import { TiLocationOutline } from "react-icons/ti";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import DroneImg2 from "../assets/images/Drone2.png";
import Layout from '../component/Layout/layout';
import '../css/index.css';


const Features = [
  {
    "icon": <TiLocationOutline />,
    "title": "Impressive Distance",
    "details": "consectetur adipisicing elit. Ut praesentium earum, blanditiis, voluptatem repellendus rerum voluptatibus dignissimos"
  },
  {
    "icon": <AiOutlineSafety />,
    "title": "100% self safe",
    "details": "consectetur adipisicing elit. Ut praesentium earum, blanditiis, voluptatem repellendus rerum voluptatibus dignissimos"
  },
  {
    "icon": <HiOutlineLightBulb />,
    "title": "Awesome Support",
    "details": "consectetur adipisicing elit. Ut praesentium earum, blanditiis, voluptatem repellendus rerum voluptatibus dignissimos"
  }
]

function Home() {
  return (
   <Layout>
     <div>
      <div className='headBanner h-[100vh] grid md:grid-cols-2 justify-evenly items-center'>
        <div className='pl-24 text-[#fcf5f5]'>
          <h2 className='uppercase w-5/6 text-[52px] font-[700] leading-[52px] mb-[17px] animationSlideText'>
            Next level of drone
          </h2>
          <h3 className='subHeading uppercase text-[38px] font-[400] leading-[40px] animationSlideText initial-hidden' style={{ animationDelay: '1s' }}>
            Insane quality for use
          </h3>
          <p className='subHeading capitalize text-[18px] mt-[19px] animationSlideText initial-hidden' style={{ animationDelay: '1.5s' }}>
            special Offer <span className='text-[#25ffff]'>20% off </span> This Week
          </p>
          <Link to={'/store'}>
            <button className='uppercase border-transparent rounded-3xl bg-red-500 px-8 py-3 mt-16 hover:opacity-70 transition duration-300 animationSlideText initial-hidden' style={{ animationDelay: '2s' }}>
              Buy Now
            </button>
          </Link>
        </div>
        <div className='animationBannerImg'>
          <img src={DroneImg} alt="DroneImg" className='w-full object-cover' />
        </div>
      </div>
      <div className='text-center mt-24'>
        <h3 className='text-[32px] font-semibold'>Awesome Features</h3>
        <div className='grid md:grid-cols-3 gap-8 px-24 py-12'>
          {Features.map((list, index) => (
            <div key={index}>
              <div
                style={{ animationDelay: `${index * 0.8}s` }}
                className='animationFeature initial-hidden border rounded-lg shadow-lg flex flex-col justify-center items-center w-full p-12'>
                <div className='text-[52px] text-[#219AEC]'>
                  {list.icon}
                </div>
                <div className='text-[24px] font-semibold py-4'>
                  {list.title}
                </div>
                <div className='text-[16px]'>
                  {list.details}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='animationBannerImg flex justify-center py-16'>
          <img src={DroneImg2} alt="drone" />
        </div>
      </div>
      <div className='bg-[#d9e6e7] py-16'>
        <h3 className='text-[32px] font-semibold text-center py-8'>Products</h3>
        <StoreGrid />
      </div>
    </div>
   </Layout>
  )
}

export default Home;