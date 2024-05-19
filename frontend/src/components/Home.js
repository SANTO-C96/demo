
import React, { useState, useEffect } from 'react';
import Image2 from '../images/slider.jpg';
import Image1 from '../images/slider2.jpg';
import Image3 from '../images/slider4.jpg';
import Img1 from '../images/ev2.jpeg';
import Img2 from '../images/ev3.jpeg';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    Image1,
    Image2,
    Image3
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(intervalId); // Clear interval on component unmount
    };
  }, []); // Run only once on component mount

  return (
    <div className='bg-white'>
      <img 
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className=" lg:ml-40 flex justify-center items-center "
      />
  <div className='text-center mt-3 '>
  <h1 className='font-bold text-3xl bg-blue-300 text-white p-4 rounded-md'>WHAT WE DO</h1>
      </div>
      <div className='md:block hidden'>
       <div className='grid grid-cols-12 m-3'>
          <div className="col-span-6 ml-1">
            <div className='text-center mt-3'><h1 className='font-bold text-3xl'>Financing independent commercial EV drivers</h1></div>
            <p className='text-center mt-3 text-bold text-xl'>BundelaFin cop is a technology company. It's subsidiary company (Aristo Securities Private Limited, an NBFC) provides loans to independent drivers who buy and operate passenger or cargo electric vehicles for last mile connectivity. Partnerships with EV manufacturers and dealerships Pan-India to provide point of sale financing.</p>
          </div>
          <div className="col-span-6 ">
            <div className='flex justify-center align-bottom '>
            <img src={Img2} alt="" className='mt-5'/>
            </div>
          </div>
       </div>
       <div className='grid grid-cols-12 m-3 ml-4'>
          <div className="col-span-6 ">
          <div className='flex justify-center align-bottom'>
               <img src={Img1} alt="" className='mt-4'/>
          </div>
          </div>
          <div className="col-span-6 ml-1">
            <div className='text-center mt-3'><h1 className='font-bold text-3xl'>Driver cum Owner (DCO) fleet vehicle operators</h1></div>
            <p className='text-center mt-3 text-bold text-xl'>BundelaFin cop  is a technology company. It's subsidiary company (Aristo Securities Private Limited, an NBFC) provides loan or Lease to drivers who buy and operate passenger or cargo electric vehicles for last mile connectivity through E-commerce, Fleet operators & logistics company.</p>
          </div>
       </div>
      </div>
    
    <div className='md:hidden'>
        <div className="grid grid-col-12">
           <div className="col-span-4">
           <div className='text-center mt-3'><h1 className='font-bold text-3xl'>Financing independent commercial EV drivers</h1></div>
           </div>
           <div className="col-span-8">
           <div className='flex justify-center align-bottom'>
               <img src={Img2} alt="" className='mt-4' />
          </div>
           </div>
        </div>
        <p className='text-center m-1 text-bold text-xl'>BundelaFin cop is a technology company. It's subsidiary company (Aristo Securities Private Limited, an NBFC) provides loans to independent drivers who buy and operate passenger or cargo electric vehicles for last mile connectivity. Partnerships with EV manufacturers and dealerships Pan-India to provide point of sale financing.</p>

        <div className="grid grid-col-12">
           <div className="col-span-4">
           <div className='text-center mt-3'><h1 className='font-bold text-3xl'>Driver cum Owner (DCO) fleet vehicle operators</h1></div>
           </div>
           <div className="col-span-8">
           <div className='flex justify-center align-bottom'>
               <img src={Img1} alt="" className='mt-4' />
          </div>
           </div>
        </div>
        <p className='text-center m-1 text-bold text-xl'>BundelaFin cop is a technology company. It's subsidiary company (Aristo Securities Private Limited, an NBFC) provides loans to independent drivers who buy and operate passenger or cargo electric vehicles for last mile connectivity. Partnerships with EV manufacturers and dealerships Pan-India to provide point of sale financing.</p>
    </div>    
    </div>
  );
};

export default Home;
