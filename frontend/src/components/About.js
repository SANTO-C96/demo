import React,{useState,useEffect} from 'react'
import Abhayji from '../images/abhaysir.jpg';
import TeamLead from '../images/teamlead1.jpg'

const About = () => {

  return (
    <div>
     <div className="container mx-auto px-4 py-8">
  <div className="section mb-8">
    <div className="section-header">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Journey</h2>
    </div>
    <div className="card bg-white shadow-md rounded-lg p-6 hover:shadow-lg">
      <div className="graph-pattern bg-gradient-to-br from-blue-500 to-brown-500 rounded-lg p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="graph-item bg-white bg-opacity-80 rounded-lg p-4">
            <h4 className="text-xl font-semibold text-blue-500 text-center">Bundela fin Corp</h4>
            <p className="text-gray-700 text-center">Established 1.5 years ago.</p>
          </div>
          <div className="graph-item bg-white bg-opacity-80 rounded-lg p-4">
            <h4 className="text-xl font-semibold text-center text-blue-500">Achievements</h4>
            <p className="text-gray-700 text-center">Description of milestone 1.</p>
          </div>
          <div className="graph-item bg-white bg-opacity-80 rounded-lg p-4">
            <h4 className="text-xl font-semibold text-blue-500 text-center">Customer Growth</h4>
            <p className="text-gray-700 text-center">Increased customer base by 30%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section mb-8">
    <div className="inline-sections grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="section">
        <div className="section-header">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
        </div>
        <div className="card mission-card bg-gradient-to-br from-blue-500 to-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">Our mission is to provide accessible and innovative financial solutions that empower individuals and businesses to achieve their goals. We strive to deliver exceptional service, transparency, and value to our customers while fostering a culture of integrity and continuous improvement.</p>
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
        </div>
        <div className="card vision-card bg-gradient-to-br from-blue-400 to-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">Our vision is to be a leading provider of financial services, recognized for our commitment to excellence, integrity, and customer satisfaction. We aim to drive positive change in the industry and empower our clients to thrive in a rapidly evolving market.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="section mb-8">
    <div className="section-header">
      <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
    </div>
    <div className="card choose-us-card bg-gradient-to-br from-yellow-700 to-blue-500 shadow-md rounded-lg p-6">
      <ul className="list-disc list-inside text-white">
        <li>Experienced team of financial experts</li>
        <li>Flexible loan options tailored to your needs</li>
        <li>Transparent and fair lending practices</li>
        <li>Exceptional customer service</li>
      </ul>
    </div>
  </div>
  <div className="section mb-8">
    <div className="section-header">
        <h1 className='text-center  font-medium'>MEET OUR BRILLIANT MINDS</h1>
      <h2 className="text-2xl font-bold mb-4 text-center">Our Leaders</h2>
    </div>
    <div className='grid md:grid-cols-12 mt-1'>
       <div className='col-span-6  bg-white  hover:bg-blue-500  transition animate-pulse'  >
           <div className='flex justify-center mt-2'>
           <img src={Abhayji}  className=' rounded-full w-44 h-44' alt="" />
           </div>
          <h1 className='text-center  font-bold text-2xl'>Abhay Singh</h1>
           <h2 className='text-center font-bold text-1xl'>DIRECTOR-NORTH</h2>
           <p className='text-center font-bold'>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
           <div className='flex flex-row justify-center'>
             <i className="fa-brands fa-facebook text-2xl p-3"></i> 
             <i className="fa-brands fa-twitter text-2xl p-3"></i>
             <i className="fa-brands fa-instagram text-2xl p-3"></i>
             <i className="fa-brands fa-linkedin text-2xl p-3"></i>
           </div>
       </div>
       <div className='col-span-6 bg-white  hover:bg-blue-500 hover:text-white mt-2 transition animate-pulse '> 
        <div className='flex justify-center mt-2 '>
        <img src={TeamLead} className='rounded-full w-44 h-44' alt="" />
        </div>
        <div className=''>
        <h1 className='text-center  font-bold text-2xl'>Abhay Singh</h1>
           <h2 className='text-center font-bold text-1xl'>DIRECTOR-NORTH</h2>
           <p className='text-center font-bold'>I thrive on ambition and hard work.I embrace the beauty of a straightforward life</p>
           <div className='flex flex-row justify-center'>
             <i className="fa-brands fa-facebook text-2xl p-3"></i>
             <i className="fa-brands fa-twitter text-2xl p-3"></i>
             <i className="fa-brands fa-instagram text-2xl p-3"></i>
             <i className="fa-brands fa-linkedin text-2xl p-3"></i>
           </div>
        </div>
         
       </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About