import React  from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Patner from './components/Patner';
import Contact from './components/Contact';
import TypeOfLoanHolder from './components/TypeOfLoanHolder';
import TypeOfLoan from './components/TypeOfLoan';
import Business from './components/Business';
import Signup from './components/Signup';
import Login from './components/Login';
import BasicDetails from './components/BasicDetails';
import Account from './components/Account';
import TwoWheelersSignup from './components/TwoWheelersSignup';
import ThreeWheelersSignup from './components/ThreeWheelersSignup';
import EVAncillarySignup from './components/EVAncillarySignup';
import OngoingLoan from './components/OngoingLoan';
import ForgetPasswordForm from './components/ForgetPasswordForm';
import SetNewPasswordForm from './components/SetNewPasswordForm';
import LoanCalculator from './components/LoanCalculator';
import HouseOwnershipForm from './components/HouseOwnershipForm';
import OfficeDetailsForm from './components/OfficeDetailForms';
import UploadSalarySlip from './components/UploadSalarySlip';
import BankStatementUpload from './components/BankStatementUpload';
import KYCOption from './components/KYCoption';
import AadhaarCardDetails from './components/AadhaarCardDetails';
import KYCDocumentForm from './components/KYCDocumentForm';
import AadhaarUploadForm from './components/AadhaarUploadForm ';
function App() {
    
  return (
    <div className="App bg-gradient-custom3 min-h-screen">
       <BrowserRouter>
       <Navbar/>
         <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/patners" element={<Patner/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
         <Route path="/typeofloanholder" element={<TypeOfLoanHolder/>}></Route>
         <Route path="/typeofloan" element={<TypeOfLoan/>}></Route>
         <Route path="/business" element={<Business/>}></Route>
         <Route path="/signup" element={<Signup/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/basic" element={<BasicDetails/>}></Route>
         <Route path="/account" element={<Account/>}></Route>
         <Route path="/twosignup" element={<TwoWheelersSignup/>}></Route>
         <Route path="/threesignup" element={<ThreeWheelersSignup/>}></Route>
         <Route path="/evsignup" element={<EVAncillarySignup/>}></Route>
         <Route path="/ongoing" element={<OngoingLoan/>}></Route>
         <Route path="/forget" element={<ForgetPasswordForm/>}></Route>
         <Route path="/setpassword" element={<SetNewPasswordForm/>}></Route>
         <Route path="/loancalculator" element={<LoanCalculator/>}></Route>
         <Route path="/address" element={<HouseOwnershipForm/>}></Route>
         <Route path="/officedetails" element={<OfficeDetailsForm/>}></Route>
         <Route path="/salaryslip" element={<UploadSalarySlip/>}></Route>
         <Route path="/bankstatement" element={<BankStatementUpload/>}></Route>
         <Route path="/kycoption" element={<KYCOption/>}></Route>
         <Route path="/aadharcarddetails" element={<AadhaarCardDetails/>}></Route>
         <Route path="/kycdocumentforum" element={<KYCDocumentForm/>}></Route>
         <Route path="/aadharupload" element={<AadhaarUploadForm/>}></Route>
         </Routes>
        </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
