import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-black mt-20">
  <div className="grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-black text-white">
    <div>
      <h1 className="text-center font-bold underline text-yellow-500 hover:text-red-700 transition duration-300 transform hover:scale-110">About Company</h1>
      <div className="p-5 flex flex-col justify-center items-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus ratione quae laudantium esse blanditiis, possimus incidunt eos harum quibusdam aut ex officiis est ea obcaecati similique. Vel nisi hic pariatur deserunt dolores, quae voluptatem ut magnam sit voluptate laborum ab, incidunt perferendis expedita. Possimus dolore sed est architecto libero.
      </div>
    </div>
    <div>
      <h1 className="text-center font-bold underline text-yellow-500 hover:text-red-700 transition duration-300 transform hover:scale-110">Useful Links</h1>
      <div className="flex flex-col justify-center items-center m-2">
        <ul className="m-2">
          <li className="p-2">Policy</li>
          <li className="p-2">Privacy Policy</li>
          <li className="p-2">Terms &amp; Conditions</li>
          <li className="p-2">Growth Story</li>
          <li className="p-2">Investor Story</li>
          <li className="p-2">Refund Policy</li>
        </ul>
      </div>
    </div>
    <div>
      <h1 className="text-center font-bold underline text-yellow-500 hover:text-red-700 transition duration-300 transform hover:scale-110">Quick Links</h1>
      <div className="flex flex-col justify-center items-center m-2">
        <ul className="m-2">
          <li className="p-2">Home</li>
          <li className="p-2">About Us</li>
          <li className="p-2">Contact Us</li>
          <li className="p-2">Products</li>
          <li className="p-2">Services</li>
        </ul>
      </div>
    </div>
    <div>
      <h1 className="text-center font-bold underline text-yellow-500 hover:text-red-700 transition duration-300 transform hover:scale-110">Contact Us</h1>
      <div className="flex flex-col justify-center items-center m-2">
        <p className="p-2">
          <i className="fas fa-home mr-3" />
          Noida Uttar Pradesh 234-35 block c
        </p>
        <p className="p-2">
          <i className="fas fa-envelope mr-3" />
          Bundela@gmail.com
        </p>
        <p className="p-2">
          <i className="fas fa-phone mr-3" />
          +91 8318304658
        </p>
        <p className="p-2">
          <i className="fas fa-print mr-3" />
          +01 335 633 77
        </p>
      </div>
    </div>
  </div>
  <hr />
  <hr />
  <hr />
  <div className="grid md:grid-cols-2">
    <div className="flex justify-around items-center m-3">
      <p className="text-white">@ Copyright 2024 All Rights Reserved by Bundela Corporation
      </p>
    </div>
    <div className="flex justify-around items-center m-3">
      <ul className="flex flex-row gap-4">
        <li>
          <a href="#" className="bg-white"><i className="fab fa-youtube text-xl" /></a>
        </li>
        <li>
          <a href="#" className="bg-white"><i className="fab fa-facebook text-xl" /></a>  
        </li>
        <li>
          <a href="#" className="bg-white"><i className="fab fa-instagram text-xl" /></a>  
        </li>
        <li>
          <a href="#" className="bg-white"><i className="fab fa-linkedin text-xl" /></a>  
        </li>
        <li>
          <a href="#" className="bg-white"><i className="fab fa-twitter text-xl" /></a>  
        </li>
        <li>
          <a href="#" className="bg-white"><i className="fab fa-google text-xl" /></a>  
        </li>
      </ul>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer