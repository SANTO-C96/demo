import React, { useEffect,useState } from 'react'
import Logoo from '../images/logoo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [refreshCount, setRefreshCount] = useState(0);
    const navigate = useNavigate();

    const hideToggleNavbar =
    window.location.pathname === '/' ||
    window.location.pathname === '/contact' ||
    window.location.pathname === '/typeofloanholder' || 
    window.location.pathname === '/typeofloan'||
    window.location.pathname === '/business'||
    window.location.pathname === '/login'||
    window.location.pathname === '/account'||
    window.location.pathname === '/twosignup'||
    window.location.pathname === '/threesignup'||
    window.location.pathname === '/evsignup'||
    window.location.pathname === '/ongoing'||
    window.location.pathname === '/forget'||
    window.location.pathname === '/setpassword'||
    window.location.pathname === '/loancalculator'||
    window.location.pathname === '/basic' ||
    window.location.pathname === '/address' ||
    window.location.pathname === '/officedetails'||
    window.location.pathname === '/bankstatement'||
    window.location.pathname === '/salaryslip'||
    window.location.pathname === '/kycoption'||
    window.location.pathname === '/aadharcarddetails'||
    window.location.pathname === '/aadharupload'||
    window.location.pathname === '/kycdocumentforum'||
    window.location.pathname === '/signup';
    useEffect(() => {
      const navDialog = document.getElementById('nav-dialog');
      if (navDialog) {
        if (hideToggleNavbar) {
          navDialog.classList.add('hidden');
        } else {
          navDialog.classList.remove('hidden');
        }
      }
    }, [refreshCount, hideToggleNavbar]);
    
    const handleClick=()=>{
        const navDialog = document.getElementById('nav-dialog');
        navDialog.classList.toggle('hidden');
    }
    const handleChange = (event) => {
      const selectedOption = event.target.value;
      if (selectedOption === "TwoWheelers") {
          navigate('/twosignup');
          // navigate('/aadharcarddetails');
      }
     else if (selectedOption === "ThreeWheelers") {
        navigate('/threesignup');
        // navigate('/kycdocumentforum')
    }
   else if (selectedOption === "EVAncillary") {
      navigate('/evsignup');
      // navigate('/aadharupload');
  }
  };
    
  return (
    <div>
        {/* This is The Top NavBar Section */}
        <nav className='bg-gradient-custom md:block hidden'>
           <ul className='flex flex-row justify-end items-center mr-3'>
            <li className='p-2 font-bold text-lg text-white hover:underline hover:text-blue-500'><a href="/contact">Contact Us</a></li>
            <li className='p-2 font-bold text-lg text-white hover:underline hover:text-blue-500'><a href="/account">My Accounts</a></li>
           </ul>
        </nav>
        {/* This is the Bottom Navbar Section */}
        <nav className='bg-gradient-custom2 md:block hidden'>
            <div className='grid grid-cols-12'>
                <div className='col-span-4 ml-10 '>
                <img src={Logoo} className='text-white h-20 inline-block text' alt="" />
                </div>
                <div className='col-span-6'>
                <ul className='flex flex-row justify-end items-center m-5 '> 
        <li className='p-2 font-bold  text-black text-xl bold hover:underline hover:text-blue-500'><a href="/">Home</a></li>
        <li className='relative group'>
  <select className='p-2 font-bold text-black text-xl bg-transparent focus:outline-none hover:underline hover:text-blue-500'>
    <option className=' font-bold text-blue-500 ' value="" disabled selected>Business Loan</option>
    <option className=' font-bold text-blue-500 ' value="product1"><a href=""> Comming Soon</a></option>
    <option className=' font-bold text-blue-500 ' value="product2"><a href=""> Comming Soon</a></option>
  </select>
</li>       
      
        {/* <li className='relative group'>
        <select
            onChange={handleChange}
            className='p-2 font-bold text-black text-xl bg-transparent focus:outline-none hover:underline hover:text-blue-500'
        >
            <option className='font-bold text-blue-500' value="" disabled selected>E-Vehicle Loans</option>
            <option className='font-bold text-blue-500' value="ThreeWheelers">Three-wheeler</option>
            <option className='font-bold text-blue-500' value="TwoWheelers">Two-wheeler</option>
            <option className='font-bold text-blue-500' value="EVAncillary">EV Ancillary loan</option>
        </select>
</li> */}
<li className='p-2 font-bold  text-black text-xl bold hover:underline hover:text-blue-500'><a href="/login">E-Vehicle Loans</a></li>


    </ul>
   </div>
     <div className='col-span-2 flex justify-center items-center'>
    <button className='p-2 font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300 ease-in-out'><a href="/login">Apply Now</a></button>
</div>
  </div>
</nav>
{/* Navbar for mobile Views */}
 <nav className='bg-gradient-custom2 md:hidden'>
     <div className='grid grid-cols-9'>
        <div className="col-span-4  mt-2 mb-2 ml-4 ">
            <img src={Logoo} className=' w-26 h-10 inline-block' alt="" />
            <div className='flex ml-2 '>
            <span className='text-bold text-white' >Fast,&nbsp;Flexible,&nbsp;Friendly</span>
            </div>
        </div>
        <div className='col-span-4'>
        <a href="/login" class="inline-block px-4 py-2 ml-5  mt-1 font-bold text-white bg-blue-500 rounded-md transition duration-300 ease-in-out hover:bg-blue-600">Apply Now</a>
        </div>
        <div className="col-span-1">
            <div className='flex justify-end mr-4 mt-3 text-2xl'>
            <i className="fa-sharp fa-solid fa-bars font-bold" onClick={handleClick}></i>
            </div>
        </div>
     </div>
 </nav>

 {/* toggle Navbar after clicking on menu*/}
   <nav id="nav-dialog" className=' fixed bg-black md:hidden inset-0'>
   <div className='flex justify-end mr-4 mt-3 text-3xl'>
     <i className="fa-sharp text-white fa-solid fa-x font-bold" onClick={handleClick}></i>
    </div>
    <div className='flex flex-col justify-center items-center'>
        <ul>
        <li className='p-2 font-bold  text-white hover:underline hover:text-blue-500'><a href="/">Home</a></li>
        {/* <li className='relative group'>
        <select
            onChange={handleChange}
            className='p-2 font-bold text-white bg-transparent focus:outline-none hover:underline hover:text-blue-500'
        >
            <option className='font-bold text-blue-500' value="" disabled selected>E-Vehicle Loans</option>
            <option className='font-bold text-blue-500' value="TwoWheelers">Three-wheeler</option>
            <option className='font-bold text-blue-500' value="ThreeWheelers">Two-wheeler</option>
            <option className='font-bold text-blue-500' value="EVAncillary">EV Ancillary loan</option>
        </select>
</li> */}

<li className='p-2 font-bold  text-white hover:underline hover:text-blue-500'><a href="/login">E-Vehicle Loans</a></li>
        

<ul>
        <li className='relative group'>
  <select className='p-2 font-bold text-white bg-transparent focus:outline-none hover:underline hover:text-blue-500'>
    <option className=' font-bold text-blue-500 ' value="" disabled selected>Business Loan</option>
    <option className=' font-bold text-blue-500 ' value="product1"><a href=""> Comming Soon</a></option>
    <option className=' font-bold text-blue-500 ' value="product2"><a href=""> Comming Soon</a></option>
  </select>
</li>
        </ul>

        {/* <li className='p-2 font-bold  text-white hover:underline hover:text-blue-500'><a href="/about">About Us</a></li>
        <li className='p-2 font-bold text-lg text-white hover:underline hover:text-blue-500'><a href="/newsandblogs">News & Blogs</a></li> */}
        <li className='p-2 font-bold text-lg text-white hover:underline hover:text-blue-500'><a href="/contact">Contact Us</a></li>
        <li className='p-2 font-bold text-lg text-white hover:underline hover:text-blue-500'><a href="/account">My Accounts</a></li>
        {/* <li className='p-2 font-bold  text-white hover:underline hover:text-blue-500'><a href="/patners">Partners</a></li>
        <li className='p-2 font-bold  text-white hover:underline hover:text-blue-500'><a href="/services">Services</a></li> */}
        </ul>
    </div>
   </nav>
    </div>
  )
}

export default Navbar